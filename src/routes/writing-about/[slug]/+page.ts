import { EXTERNAL_POSTS, getAllPosts, normalizePost } from "$lib/posts";
import type { EntryGenerator, PageLoad } from "./$types";
import { redirect } from "@sveltejs/kit";

import { error } from "@sveltejs/kit";

export const load: PageLoad = async ({ params }) => {
  const externalPost = Object.values(EXTERNAL_POSTS).find(
    (post) => post.metadata.slug === params.slug,
  );
  if (externalPost) {
    redirect(301, externalPost.url);
  }
  try {
    const postModule = await import(`$posts/${params.slug}.svx`);

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
