import { defineConfig } from 'astro/config';

import svelte from '@astrojs/svelte';
import deno from '@astrojs/deno';

// https://astro.build/config
export default defineConfig({
  adapter: deno({ port: 3000 }),
  integrations: [svelte({ configFile: false })],
  vite: {
    ssr: {
      external: ['svgo'],
    },
  },
});
