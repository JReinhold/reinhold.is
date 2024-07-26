import { getAllPosts, type Post } from "$lib/posts";
import type { PageLoad } from "./$types";

export const load: PageLoad<{ posts: Post[] }> = async () => {
  return {
    posts: getAllPosts(),
  };
};
