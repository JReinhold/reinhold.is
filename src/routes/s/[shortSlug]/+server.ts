import { redirect } from "@sveltejs/kit";
import type { EntryGenerator, RequestHandler } from "./$types";
import { getAllPosts } from "../../../lib/posts";

export const prerender = true;

export const GET: RequestHandler = async ({ params }) => {
  const allPosts = getAllPosts();
  const post = allPosts.find((p) => p.metadata.shortSlug === params.shortSlug);

  if (!post) {
    redirect(301, "/");
  }

  redirect(308, `/writing-about/${post.metadata.slug}`);
};

export const entries: EntryGenerator = async () => {
  return getAllPosts().map(({ metadata: { shortSlug } }) => ({ shortSlug }));
};
