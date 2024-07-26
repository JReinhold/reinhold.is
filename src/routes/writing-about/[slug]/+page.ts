import { getAllPosts, normalizePost } from "$lib/posts";
import type { EntryGenerator, PageLoad } from "./$types";

import { error } from "@sveltejs/kit";

export const load: PageLoad = async ({ params }) => {
  try {
    const postModule = await import(`../../../lib/posts/${params.slug}.svx`);

    return {
      post: normalizePost({ module: postModule, slug: params.slug }),
    };
  } catch (err) {
    error(404, err as Error);
  }
};

export const entries: EntryGenerator = async () => {
  return getAllPosts().map(({ metadata: { slug } }) => ({ slug }));
};

export const prerender = true;
