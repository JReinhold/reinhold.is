import { sveltekit } from "@sveltejs/kit/vite";
import icons from "unplugin-icons/vite";
import { visualizer } from "rollup-plugin-visualizer";

/** @type {import('vite').UserConfig} */
const config = {
  plugins: [
    sveltekit(),
    icons({
      compiler: "svelte",
    }),
    visualizer({
      emitFile: true,
      filename: "stats.html",
    }),
  ],
  server: {
    fs: {
      // Allow serving files from one level up to the project root
      allow: ["./posts"],
    },
  },
};

export default config;
