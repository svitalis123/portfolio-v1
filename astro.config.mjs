import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  // Canonical origin for absolute URLs. Read from the environment rather than
  // hardcoded, so preview deployments do not advertise the production domain
  // (and production never advertises a placeholder one).
  site: process.env.PUBLIC_SITE_URL,
  output: 'server',
  adapter: vercel(),
  integrations: [react()],
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport',
  },
  vite: {
    ssr: {
      // `sanitize-html` is CommonJS and `require()`s `htmlparser2`, which is ESM-only
      // from v12. Node 22.12+ allows require() of ESM, so this works locally — but
      // Vercel's function runtime uses a loader that does not, and every page touching
      // the sanitizer died with ERR_REQUIRE_ESM. Bundling it resolves the dependency at
      // build time, so no require() of an ES module survives into the deployed output.
      // htmlparser2 and its helpers are bundled too: leaving them external made
      // the bundler emit a runtime require() for them from the wrapped CommonJS
      // module, which is the same failure one level down.
      noExternal: ['sanitize-html', 'htmlparser2', 'domutils', 'dom-serializer', 'domhandler', 'entities'],
    },
  },
});
