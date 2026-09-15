// File: src/lib/mongodb.ts
import { MongoClient } from 'mongodb';
import { getSecret } from 'astro:env/server';

declare global {
  // eslint-disable-next-line no-var
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

const options = {
  // Serverless invocations are short-lived; a small pool avoids exhausting Atlas
  // connection limits when many instances are warm at once.
  maxPoolSize: 10,
  serverSelectionTimeoutMS: 10_000,
};

/**
 * Astro 6 inlines every `import.meta.env` read at build time, so the previous
 * module-scope `import.meta.env.MONGODB_URI` compiled to `undefined` wherever the
 * variable was absent from the *build* environment — and the module-level throw
 * then took down every page that imported it. `getSecret` resolves from the real
 * runtime environment instead, and reading it inside the function keeps a missing
 * variable a per-request failure rather than a bundle-wide one.
 */
function connect(): Promise<MongoClient> {
  const uri = getSecret('MONGODB_URI');
  if (!uri) {
    throw new Error('Invalid/Missing environment variable: "MONGODB_URI"');
  }

  const pending: Promise<MongoClient> = new MongoClient(uri, options).connect().catch((error) => {
    // Forget a failed connection so the next request retries, instead of every
    // later caller replaying one rejected promise for the life of the instance.
    if (globalThis._mongoClientPromise === pending) globalThis._mongoClientPromise = undefined;
    throw error;
  });

  return pending;
}

/**
 * The connection is established once and shared by every request this instance
 * serves, instead of a fresh handshake per page view.
 *
 * Memoised on `globalThis` rather than behind a dev/prod branch: it survives the
 * module reloads that HMR causes in dev (which used to leak a client per reload),
 * and in production a serverless instance has exactly one globalThis, so this is
 * the same single shared connection. Avoiding the branch also keeps every
 * `import.meta.env` read out of this file — reading even `DEV` makes Astro 6 inline
 * the whole build-time environment, secrets included, into the bundle.
 */
export function mongoClient(): Promise<MongoClient> {
  globalThis._mongoClientPromise ??= connect();
  return globalThis._mongoClientPromise;
}
