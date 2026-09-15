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
});
