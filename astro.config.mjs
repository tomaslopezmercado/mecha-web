// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://mecha.com.ar',
  base: '/mecha-web',
  outDir: './docs',
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [sitemap()]
});