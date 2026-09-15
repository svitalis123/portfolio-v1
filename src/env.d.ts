/// <reference path="../.astro/types.d.ts" />

interface ImportMetaEnv {
  readonly MONGODB_URI: string;
  readonly ADMIN_USERNAME: string;
  readonly ADMIN_PASSWORD: string;
  /** Optional. Falls back to ADMIN_PASSWORD as HMAC key material for the admin session cookie. */
  readonly ADMIN_SESSION_SECRET?: string;
  /** Canonical origin, e.g. https://example.com. Consumed by `site` in astro.config.mjs. */
  readonly PUBLIC_SITE_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

// The fontsource packages ship CSS only, with no type declarations.
declare module '@fontsource-variable/plus-jakarta-sans';
