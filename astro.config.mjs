import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://nicoveraz.github.io',
  base: '/rcp-para-todos/',
  integrations: [tailwind()],
  vite: {
    server: {
      allowedHosts: true,
    },
  },
});
