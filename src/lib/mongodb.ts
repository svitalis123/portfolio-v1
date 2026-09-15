// File: src/lib/mongodb.ts
import { MongoClient } from 'mongodb';

declare global {
  // eslint-disable-next-line no-var
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

if (!import.meta.env.MONGODB_URI) {
  throw new Error('Invalid/Missing environment variable: "MONGODB_URI"');
}

const uri = import.meta.env.MONGODB_URI;
const options = {
  // Serverless invocations are short-lived; a small pool avoids exhausting Atlas
  // connection limits when many instances are warm at once.
  maxPoolSize: 10,
  serverSelectionTimeoutMS: 10_000,
};

let clientPromise: Promise<MongoClient>;

// `import.meta.env.DEV` is the Astro/Vite flag — the previous NODE_ENV check never
// matched, so every HMR reload leaked a fresh client.
if (import.meta.env.DEV) {
  // Reuse one client across module reloads caused by HMR.
  if (!globalThis._mongoClientPromise) {
    globalThis._mongoClientPromise = new MongoClient(uri, options).connect();
  }
  clientPromise = globalThis._mongoClientPromise;
} else {
  clientPromise = new MongoClient(uri, options).connect();
}

// Module-scoped promise: the connection is established once and shared by every
// request this instance serves, instead of a fresh handshake per page view.
export default clientPromise;
