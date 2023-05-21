import { unified, type Plugin } from "unified";
import remarkParse from "remark-parse";
import remarkFrontmatter from "remark-frontmatter";
import remarkGfm from "remark-gfm";
import { matter } from "vfile-matter";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import remarkStringify from "remark-stringify";
import remarkReadingTime from "remark-reading-time";
import remarkShikiTwoslash from "remark-shiki-twoslash";

export type ParsedMarkdown = {
  data: unknown;
  html: string;
};

export const parseMarkdown = async (
  markdown: string,
): Promise<ParsedMarkdown> => {
  const { data } = await unified()
    .use(remarkParse)
    .use(remarkReadingTime as Plugin)
    .use(remarkFrontmatter)
    .use(() => (_, content) => {
      matter(content);
    })
    .use(remarkStringify)
    .process(markdown);

  const vfile = await unified()
    .use(remarkParse)
    .use(remarkFrontmatter)
    .use(remarkGfm)
    .use(remarkShikiTwoslash, { theme: "github-dark" })
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeStringify, { allowDangerousHtml: true })
    .process(markdown);

  console.log("LOG html:", vfile);

  return { data, html: String(vfile) };
};
