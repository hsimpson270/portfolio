// @ts-check
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

import playformInline from '@playform/inline';

// https://astro.build/config
export default defineConfig({
  site: 'https://hunter-simpson.dev',

  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [sitemap(), playformInline()],
});