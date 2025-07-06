import type { Component } from "svelte";

export const EXTERNAL_POSTS: Record<string, ExternalPost> = {
  "storybook-module-mocking": {
    url: "https://storybook.js.org/blog/type-safe-module-mocking",
    metadata: {
      slug: "storybook-module-mocking",
      shortSlug: "sb-mock",
      title: "Type-safe module mocking in Storybook",
      subtitle: "A new, standards-based mocking approach",
      tldr: "something",
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
      shortSlug: "sb-sk",
      title: "Storybook for SvelteKit",
      subtitle: "Zero-config support for SvelteKit 1.0 with our new framework",
      tldr: "something",
      publishedAt: new Date("2023-02-28"),
      readingTime: {
        text: "4 min read",
        minutes: 4,
        time: 240000,
        words: 857,
      },
    },
  },
  "syntax-fm-908-storybook-has-evolved": {
    url: "https://syntax.fm/show/908/storybook-has-evolved-w-jeppe-reinhold",
    metadata: {
      slug: "syntax-fm-908-storybook-has-evolved",
      shortSlug: "sx-908",
      title: "Syntax.fm #908: Storybook Has Evolved w/ Jeppe Reinhold",
      subtitle: "The evolution of Storybook with Wes and Scott",
      description:
        "Wes and Scott talk with Jeppe Reinhold about Storybook 9's powerful new features—including drastically reduced bloat, seamless Vite integration, and next-level component testing. They dive into visual regression testing, accessibility, performance, and best practices for writing robust, isolated UI components developers can actually enjoy testing and documenting.",
      publishedAt: new Date("2025-06-04"),
      readingTime: {
        text: "50 min watch/listen",
        minutes: 50,
        time: 3000000,
        words: 0, // Not applicable for audio
      },
    },
  },
  "component-testing-w-storybook-svelte-summit-2025": {
    url: "https://www.youtube.com/watch?v=mdyRQDDp28s",
    metadata: {
      slug: "component-testing-w-storybook-svelte-summit-2025",
      shortSlug: "sum-2025",
      title: "Component Testing with Storybook, Svelte, and Vitest",
      subtitle: "Talk at Svelte Summit Spring 2025",
      description:
        "Discover how component testing bridges the gap between E2E and unit tests for UI. In this talk I'll showcase new tools in Storybook that provide automated component AND accessibility testing for Svelte. Learn how to create interactive, shareable tests in Storybook, that integrate with your existing Vitest setup while using the familiar Svelte syntax you know and love.",
      publishedAt: new Date("2025-06-04"),
      readingTime: {
        text: "26 min watch",
        minutes: 26,
        time: 1560000,
        words: 0, // Not applicable for audio
      },
    },
  },
  "storybook-and-vite-viteconf-2023": {
    url: "https://www.youtube.com/watch?v=4wNkUQlStF8",
    metadata: {
      slug: "storybook-and-vite-viteconf-2023",
      shortSlug: "viteconf-2023",
      title: "Storybook & Vite: It Keeps Getting Better",
      subtitle: "Talk at ViteConf 2023",
      description: "Take a trip back to 2023 as Storybook and Vite hit their stride—expect performance leaps, smarter integrations, and fresh tools for testing and visual diffs. Perfect if you want to see what the buzz was about when these two were leveling up together.",
      publishedAt: new Date("2023-10-20"),
      readingTime: {
        text: "17 min watch",
        minutes: 17,
        time: 1020000,
        words: 0, // Not applicable for audio
      },
    },
  },
};

export type PostMetadata = {
  slug: string;
  shortSlug: string;
  title: string;
  subtitle: string;
  description?: string;
  tldr?: string;
  publishedAt: Date | undefined;
  readingTime: {
    text: string;
    minutes: number;
    time: number;
    words: number;
  };
} & (
  | {
      image: string;
      imageAlt: string;
    }
  | {
      image?: never;
      imageAlt?: never;
    }
);
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
  const postModules = import.meta.glob("$posts/*.svx", {
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
