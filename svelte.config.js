import adapter from "@sveltejs/adapter-cloudflare";
import { sveltePreprocess } from "svelte-preprocess";
import { mdsvex } from "mdsvex";
import remarkGfm from "remark-gfm";
import mdsvexReadingTime from "mdsvex-reading-time";
import rehypeShiki from "@shikijs/rehype";
import { transformerTwoslash } from "@shikijs/twoslash";
import {
  transformerNotationDiff,
  transformerMetaHighlight,
} from "@shikijs/transformers";

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
      rehypePlugins: [
        [
          rehypeShiki,
          {
            theme: "github-dark",
            transformers: [
              transformerNotationDiff(),
              transformerMetaHighlight(),
              transformerTwoslash(),
            ],
            defaultLanguage: "typescript",
          },
        ],
      ],
      highlight: false,
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
