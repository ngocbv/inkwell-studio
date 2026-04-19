// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://inkwell-studio.vercel.app',
  integrations: [sitemap()],
  output: 'static',
});
