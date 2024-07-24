import adapter from "@sveltejs/adapter-cloudflare";
import { sveltePreprocess } from "svelte-preprocess";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: [
    sveltePreprocess({
      defaults: {
        style: "postcss",
      },
      postcss: true,
    }),
  ],
  kit: {
    adapter: adapter(),
  },
};

export default config;
