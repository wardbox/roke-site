// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  site: process.env.SITE || 'https://roke.dev',
  base: process.env.BASE || '/',
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [icon()]
});