import { unified, type Plugin } from "unified";
import remarkParse from "remark-parse";
import remarkFrontmatter from "remark-frontmatter";
import remarkGfm from "remark-gfm";
import { matter } from "vfile-matter";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import remarkStringify from "remark-stringify";
import remarkReadingTime from "remark-reading-time";
import rehypeShiki from "@shikijs/rehype";
import { transformerTwoslash } from "@shikijs/twoslash";

export type ParsedMarkdown = {
  data: unknown;
  html: string;
};

export const parseMarkdown = async (
  markdown: string,
): Promise<ParsedMarkdown> => {
  markdown = `${markdown}
  \`\`\`ts twoslash
  const hello = "world";



  
  \`\`\`
  `;
  const processor = unified()
    .use(remarkParse)
    .use(remarkReadingTime as Plugin)
    .use(remarkFrontmatter)
    .use(() => (_, content) => {
      matter(content);
    });

  const { data } = await processor().use(remarkStringify).process(markdown);

  const vfile = await processor()
    .use(remarkGfm)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeShiki, {
      theme: "github-dark-dimmed",
      transformers: [transformerTwoslash({ explicitTrigger: true })],
      defaultLanguage: "typescript",
    })
    .use(rehypeStringify, { allowDangerousHtml: true })
    .process(markdown);

  return { data, html: String(vfile) };
};
