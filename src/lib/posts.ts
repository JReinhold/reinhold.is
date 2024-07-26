import type { Component } from "svelte";

export const EXTERNAL_POSTS: Record<string, ExternalPost> = {
  "storybook-module-mocking": {
    url: "https://storybook.js.org/blog/type-safe-module-mocking",
    metadata: {
      slug: "storybook-module-mocking",
      title: "Type-safe module mocking in Storybook",
      subtitle: "A new, standards-based mocking approach",
      summary: "something",
      publishedAt: new Date("2023-05-29"),
      readingTime: {
        text: "8 min read",
        minutes: 8,
        time: 480000,
        words: 2041,
      },
    },
  },
  "storybook-for-sveltekit": {
    url: "https://storybook.js.org/blog/storybook-for-sveltekit/",
    metadata: {
      slug: "storybook-for-sveltekit",
      title: "Storybook for SvelteKit",
      subtitle: "Zero-config support for SvelteKit 1.0 with our new framework",
      summary: "something",
      publishedAt: new Date("2023-02-28"),
      readingTime: {
        text: "4 min read",
        minutes: 4,
        time: 240000,
        words: 857,
      },
    },
  },
};

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
export type InternalPost = {
  Content: Component;
  metadata: PostMetadata;
};
export type ExternalPost = {
  url: string;
  metadata: PostMetadata;
};
export type Post = InternalPost | ExternalPost;

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
    .concat(Object.values(EXTERNAL_POSTS))
    .filter((post) => {
      return post.metadata.publishedAt !== undefined;
    })
    .toSorted((a, b) => {
      return (
        (b.metadata.publishedAt as Date).valueOf() -
        (a.metadata.publishedAt as Date).valueOf()
      );
    });
};
