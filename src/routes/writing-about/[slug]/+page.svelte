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

<Section element="header">
  {#if post.metadata.image}
    <img
      src={`/images/${post.metadata.image}`}
      alt={post.metadata.imageAlt}
      class="post-image"
    />
  {/if}
  <h1>{post.metadata.title}</h1>
  <div class="sub-container">
    <p role="doc-subtitle">{post.metadata.subtitle}</p>
    <p class="meta">
      {#if post.metadata.publishedAt}
        {toLocaleDateString(post.metadata.publishedAt)}
      {:else}
        Unpublished draft
      {/if}
      —
      {post.metadata.readingTime.text}
    </p>
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
  <H2>Comments</H2>
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
    theme="light"
    lang="en"
  />
</Section>

<style>
  .sub-container {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    gap: var(--size-fluid-1);
  }
  .meta {
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
