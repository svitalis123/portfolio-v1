import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import node from "@astrojs/node";

import tailwind from '@astrojs/tailwind';

import netlify from '@astrojs/netlify';

import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: vercel(),
  integrations: [react(), tailwind()]
});