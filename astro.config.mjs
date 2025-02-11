// @ts-check
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import playformInline from '@playform/inline';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://hunter-simpson.dev',
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [icon(), mdx(), playformInline(), sitemap()],
});
