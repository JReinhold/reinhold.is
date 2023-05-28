import adapter from "@sveltejs/adapter-cloudflare";
import preprocess from "svelte-preprocess";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: [
    preprocess({
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
