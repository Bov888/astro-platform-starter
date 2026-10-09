import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import db from '@astrojs/db';
import preact from '@astrojs/preact';

import netlify from '@astrojs/netlify';

export default defineConfig({
  output: 'server',

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [db(), preact()],
  adapter: netlify()
});