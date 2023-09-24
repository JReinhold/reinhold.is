import { getPost, getPosts } from "$lib/server/posts";
import type { EntryGenerator, PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ params }) => {
  const post = await getPost(params.slug);
  return { post };
};

/** @type {import('./$types').EntryGenerator} */
export const entries: EntryGenerator = async () => {
  const posts = await getPosts({ publishedOnly: false });
  return posts.map((post) => ({ slug: post.slug }));
};
export const prerender = true;
