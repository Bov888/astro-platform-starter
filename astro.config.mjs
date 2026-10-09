import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

import db from '@astrojs/db';
import preact from '@astrojs/preact';

// https://astro.build/config
export default defineConfig({
    vite: {
        plugins: [tailwindcss()]
    },
    integrations: [react(), db(), preact()],
    adapter: netlify({
        devFeatures: {
            environmentVariables: true
        }
    })
});