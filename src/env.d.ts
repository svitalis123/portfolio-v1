/// <reference path="../.astro/types.d.ts" />

/**
 * Secrets are no longer declared here.
 *
 * Astro 6 inlines every `import.meta.env` read at build time, so anything listed on
 * `ImportMetaEnv` is a value baked into the bundle. MONGODB_URI, ADMIN_USERNAME,
 * ADMIN_PASSWORD and ADMIN_SESSION_SECRET are read through `getSecret()` from
 * `astro:env/server` instead, which resolves against the runtime environment.
 *
 * PUBLIC_SITE_URL stays a build-time value on purpose: it is consumed by `site` in
 * astro.config.mjs via `process.env`, which is evaluated while the config loads.
 */

// The fontsource packages ship CSS only, with no type declarations.
declare module '@fontsource-variable/plus-jakarta-sans';
