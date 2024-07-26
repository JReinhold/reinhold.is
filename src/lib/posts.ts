import type { Component } from "svelte";

export type PostMetadata = {
  slug: string;
  title: string;
  subtitle?: string;
  summary: string;
  publishedAt: Date | undefined;
  readingTime: {
    text: string;
    minutes: number;
    time: number;
    words: number;
  };
};
export type Post = {
  Content: Component;
  metadata: PostMetadata;
};

type BasePostModule = {
  module: { default?: Component } & { metadata: PostMetadata };
};
type WithPath = BasePostModule & {
  path: string;
  slug?: never;
};
type WithSlug = BasePostModule & {
  path?: never;
  slug: string;
};
type PostModule = WithPath | WithSlug;

export const normalizePost = ({ module, path, slug }: PostModule): Post => {
  const metadata = module.metadata;
  return {
    Content: module.default as Component,
    metadata: {
      ...metadata,
      slug: slug ?? (path.split("/").at(-1) as string).replace(/\.svx$/, ""),
      publishedAt: metadata.publishedAt && new Date(metadata.publishedAt),
    },
  };
};

export const getAllPosts = () => {
  const postModules = import.meta.glob("./posts/*.svx", {
    eager: true,
  });

  return Object.entries(postModules)
    .map(([path, module]) =>
      normalizePost({
        module: module as Post,
        path,
      }),
    )
    .filter((post) => {
      console.log("LOG: ", { post });
      return post.metadata.publishedAt !== undefined;
    })
    .toSorted((a, b) => {
      return (
        (b.metadata.publishedAt as Date).valueOf() -
        (a.metadata.publishedAt as Date).valueOf()
      );
    });
};
