import path from "node:path";
import { sveltekit } from "@sveltejs/kit/vite";
import icons from "unplugin-icons/vite";
import { visualizer } from "rollup-plugin-visualizer";
import { defineConfig } from "vite";

/** @type {import('vite').UserConfig} */
export default defineConfig({
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
      allow: ["./posts", path.resolve("../../../kit")],
    },
  },
});
