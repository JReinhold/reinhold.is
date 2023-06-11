import * as z from "zod";
import { getDiscussions, type Discussion } from "./github";
import { parseMarkdown } from "./markdown";
import { postSchema, type Post } from "$lib/posts";

const markdownDataSchema = z.object({
  readingTime: z.object({
    text: z.string(),
    minutes: z.number(),
    time: z.number(),
    words: z.number(),
  }),
  matter: z.object({
    subtitle: z.string(),
    slug: z.string(),
    publishedAt: z
      .string()
      .optional()
      .transform((arg) => {
        if (!arg) return undefined;
        return new Date(arg);
      }),
  }),
});

export const getPost = async (slug: Post["slug"]): Promise<Post> => {
  const discussions = await getDiscussions();
  const posts = await Promise.all(discussions.map(mapDiscussionToPost));
  const post = posts.find((post) => post.slug === slug);
  if (!post) {
    throw new Error(`Post not found: ${slug}`);
  }
  return post;
};

export const getPosts = async (publishedOnly = true): Promise<Post[]> => {
  const discussions = await getDiscussions();
  const posts = await Promise.all(discussions.map(mapDiscussionToPost));
  if (publishedOnly) {
    return posts.filter((post) => post.publishedAt);
  }
  return posts;
};

const mapDiscussionToPost = async (discussion: Discussion): Promise<Post> => {
  const { data, html } = await parseMarkdown(discussion.body);
  const { matter, readingTime } = markdownDataSchema.parse(data);

  return postSchema.parse({
    title: discussion.title,
    html,
    discussionNumber: discussion.number,
    readingTime,
    ...matter,
  });
};
