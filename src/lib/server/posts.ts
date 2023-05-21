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
    publishedAt: z.string().optional().pipe(z.coerce.date()),
  }),
});

export const getPost = async (slug: Post["slug"]): Promise<Post[]> => {
  const discussions = await getDiscussions();
  const posts = await Promise.all(discussions.map(mapDiscussionToPost));
  return posts;
};

export const getPosts = async (): Promise<Post[]> => {
  const discussions = await getDiscussions();
  const posts = await Promise.all(discussions.map(mapDiscussionToPost));
  return posts;
};

const mapDiscussionToPost = async (discussion: Discussion): Promise<Post> => {
  const { data, html } = await parseMarkdown(discussion.body);
  const { matter, readingTime } = markdownDataSchema.parse(data);

  return postSchema.parse({
    title: discussion.title,
    html,
    readingTime,
    ...matter,
  });
};
