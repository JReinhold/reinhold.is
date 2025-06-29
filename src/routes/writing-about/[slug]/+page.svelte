<script module>
  import "../../../twoslash.css";
</script>

<script lang="ts">
  import Giscus from "@giscus/svelte";
  import { toLocaleDateString } from "$lib/format-date";
  import Section from "$lib/components/atoms/section.svelte";
  import H2 from "$lib/components/atoms/h2.svelte";
  import type { InternalPost } from "$lib/posts";
  import Link from "$lib/components/atoms/link.svelte";
  import Emoji from "$lib/components/emoji.svelte";

  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- workaround for https://github.com/sveltejs/language-tools/issues/1026
  const UntypedGiscus = Giscus as any;

  const { data } = $props();
  const post = data.post as InternalPost;
  const Content = post.Content;
</script>

<svelte:head>
  <title>{post.metadata.title} | Jeppe Reinhold</title>
  <meta name="description" content={post.metadata.tldr} />
  <meta property="og:title" content={post.metadata.title} />
  <meta property="og:description" content={post.metadata.tldr} />
  {#if post.metadata.image}
    <meta property="og:image" content={`/images/${post.metadata.image}`} />
  {/if}
  <meta
    property="og:url"
    content={`https://reinhold.is/writing-about/${post.metadata.slug}`}
  />
  <meta property="og:type" content="article" />
  <meta property="og:site_name" content="Jeppe Reinhold" />
  <meta property="article:author" content="Jeppe Reinhold" />
  {#if post.metadata.publishedAt}
    <meta
      property="article:published_time"
      content={post.metadata.publishedAt.toISOString()}
    />
  {/if}
</svelte:head>

<Section element="header" class="post-header">
  {#if post.metadata.image}
    <img
      src={`/images/${post.metadata.image}`}
      alt={post.metadata.imageAlt}
      class="post-image"
    />
  {/if}
  <h1>{post.metadata.title}</h1>
  <div class="meta-sized-container">
    <div class="meta-layout">
      <p role="doc-subtitle">{post.metadata.subtitle}</p>
      <p class="date-time">
        {#if post.metadata.publishedAt}
          {toLocaleDateString(post.metadata.publishedAt)}
        {:else}
          Unpublished draft
        {/if}
        —
        {post.metadata.readingTime.text}
      </p>
    </div>
  </div>
  <details>
    <summary>tl;dr</summary>
    <p>{post.metadata.tldr}</p>
  </details>
</Section>

<Section>
  <Content />
  <Link
    href={`https://github.com/JReinhold/reinhold.is/edit/main/posts/${post.metadata.slug}.svx`}
    style="text-align: end;"><Emoji>✏️</Emoji> Suggest an edit</Link
  >
</Section>
<Section>
  <H2>Reactions</H2>
  <span class="text-paragraph"
    >Share on <a
      href="https://bsky.app/intent/compose?text={encodeURIComponent(
        `I just read "${post.metadata.title}" by @reinhold.is and I loved it!
You should read it too at https://reinhold.is/writing-about/${post.metadata.slug}`,
      )}"
      target="_blank">🦋 Bluesky</a
    >,
    <a
      href="https://x.com/intent/tweet?text={encodeURIComponent(
        `I just read "${post.metadata.title}" by @jreinhold and I loved it!
You should read it too at https://reinhold.is/writing-about/${post.metadata.slug}`,
      )}"
      target="_blank">🐦 𝕏</a
    >, or
    <a
      href="https://www.linkedin.com/sharing/share-offsite/?url={encodeURIComponent(
        `https://reinhold.is/writing-about/${post.metadata.slug}`,
      )}"
      target="_blank">👔 LinkedIn</a
    >, or write a comment below. 👇</span
  >
  <UntypedGiscus
    loading="lazy"
    repo="jreinhold/reinhold.is"
    repoId="MDEwOlJlcG9zaXRvcnk5ODkxOTIyMw=="
    mapping="specific"
    category="Blogposts"
    categoryId="DIC_kwDOBeVjN84CWnMH"
    term={post.metadata.slug}
    strict="1"
    reactionsEnabled="1"
    inputPosition="bottom"
    theme={data.theme.mode === "light" ? "light" : "dark_dimmed"}
    lang="en"
  />
</Section>

<style>
  .meta-sized-container {
    container-type: inline-size;
  }

  .meta-layout {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    gap: var(--size-fluid-1);
  }
  @container (max-width: 30rem) {
    .meta-layout {
      flex-direction: column;
      align-items: flex-start;
    }
  }

  .date-time {
    color: hsl(var(--text-2-hsl) / 80%);
    font-size: var(--font-size-2);
  }

  .post-image {
    grid-column: full;
    margin-top: calc(var(--size-fluid-2) * -1);
    margin-bottom: var(--size-fluid-1);
    max-height: var(--size-14);
    width: 100%;
    object-fit: cover;
    border-top-left-radius: var(--radius-3);
    border-top-right-radius: var(--radius-3);
  }

  :global(.edit-suggestion) {
    text-align: end;
  }
</style>
