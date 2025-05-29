<script context="module">
  import "../../../twoslash.css";
</script>

<script lang="ts">
  import Giscus from "@giscus/svelte";
  import { toLocaleDateString } from "$lib/format-date";
  import Section from "$lib/components/atoms/section.svelte";
  import SectionContainer from "$lib/components/atoms/section-container.svelte";
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

<SectionContainer>
  <Section element="header">
    <h1>{post.metadata.title}</h1>
    <p role="doc-subtitle">{post.metadata.subtitle}</p>
    <div class="meta">
      {#if post.metadata.publishedAt}
        {toLocaleDateString(post.metadata.publishedAt)}
      {:else}
        Unpublished draft
      {/if}
      —
      {post.metadata.readingTime.text}
    </div>
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
</SectionContainer>

<style>
  .meta {
    color: hsl(var(--text-2-hsl) / 70%);
  }

  :global(.edit-suggestion) {
    text-align: end;
  }
</style>
