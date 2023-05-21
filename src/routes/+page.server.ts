import type { Post } from "$lib/posts";
import { getPosts } from "$lib/server/posts";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad<{ posts: Post[] }> = async () => {
  const posts = await getPosts();
  return { posts };
};
