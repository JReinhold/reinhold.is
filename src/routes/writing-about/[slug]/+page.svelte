<script context="module">
  import "../../../shiki.css";
  import "../../../twoslash.css";
</script>

<script lang="ts">
  import Giscus from "@giscus/svelte";
  import { toLocaleDateString } from "$lib/format-date";
  import Section from "$lib/components/atoms/section.svelte";
  import SectionContainer from "$lib/components/atoms/section-container.svelte";
  import H2 from "$lib/components/atoms/h2.svelte";

  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- workaround for https://github.com/sveltejs/language-tools/issues/1026
  const UntypedGiscus = Giscus as any;

  const { data } = $props();
  const post = data.post;
  const Content = post.Content;
</script>

<SectionContainer>
  <Section element="header">
    <h1>{post.metadata.title}</h1>
    <p role="doc-subtitle">{post.metadata.subtitle}</p>
    <div class="meta">
      <span>
        {post.metadata.publishedAt
          ? "Published: " + toLocaleDateString(post.metadata.publishedAt)
          : "Unpublished draft"}
      </span>
      <span>{post.metadata.readingTime.text}</span>
    </div>
  </Section>

  <Section>
    <Content />
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
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    gap: var(--size-5);
    align-items: center;

    & span {
      font-weight: var(--font-weight-5);
    }
  }
</style>
