import * as z from "zod";

export const postSchema = z.object({
  title: z.string(),
  subtitle: z.string(),
  html: z.string(),
  slug: z.string(),
  publishedAt: z.date().optional(),
  discussionNumber: z.number(),
  readingTime: z.object({
    text: z.string(),
    minutes: z.number(),
    time: z.number(),
    words: z.number(),
  }),
});
export type Post = z.infer<typeof postSchema>;
