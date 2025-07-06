import adapter from "@sveltejs/adapter-cloudflare";
import { mdsvex, escapeSvelte } from "mdsvex";
import remarkGfm from "remark-gfm";
import mdsvexReadingTime from "mdsvex-reading-time";
import {
  transformerNotationDiff,
  transformerNotationHighlight,
} from "@shikijs/transformers";

import { createHighlighter } from "shiki";

const theme = "github-dark-dimmed";
const highlighter = await createHighlighter({
  themes: [theme],
  langs: ["javascript", "typescript"],
});

/** @type {import('@sveltejs/kit').Config} */
const config = {
  onwarn: (warning, handler) => {
    if (
      warning.code === "a11y_no_noninteractive_tabindex" &&
      warning.filename.endsWith(".svx")
    ) {
      // ignore warnings about tabindex in markdown files
      // shiki adds tabindex to pre tags
      return;
    }
    handler(warning);
  },
  extensions: [".svelte", ".svx"],
  preprocess: [
    mdsvex({
      remarkPlugins: [mdsvexReadingTime, remarkGfm],
      highlight: {
        highlighter: async (code, lang = "text") => {
          const html = escapeSvelte(
            highlighter.codeToHtml(code, {
              lang,
              theme,
              defaultLanguage: "typescript",
              transformers: [
                transformerNotationHighlight(),
                transformerNotationDiff(),
              ],
            }),
          );
          return `{@html \`${html}\` }`;
        },
      },
      layout: "./src/lib/components/blog/layout.svelte",
    }),
  ],
  kit: {
    adapter: adapter(),
    alias: {
      $posts: "./posts",
    },
  },
};

export default config;
