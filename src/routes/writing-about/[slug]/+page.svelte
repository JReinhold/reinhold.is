<script context="module">
  import "../../../shiki.css";
  import "../../../twoslash.css";
</script>

<script lang="ts">
  import Giscus from "@giscus/svelte";
  import { toLocaleDateString } from "$lib/format-date";
  import Section from "../../../components/atoms/section.svelte";
  import SectionContainer from "../../../components/atoms/section-container.svelte";
  import H2 from "../../../components/atoms/h2.svelte";

  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- workaround for https://github.com/sveltejs/language-tools/issues/1026
  const UntypedGiscus = Giscus as any;

  const { data } = $props();
</script>

<SectionContainer>
  <Section element="header">
    <h1>{data.post.title}</h1>
    <p role="doc-subtitle">{data.post.subtitle}</p>
    <div class="meta">
      <span>
        {data.post.publishedAt
          ? "Published: " + toLocaleDateString(data.post.publishedAt)
          : "Unpublished draft"}
      </span>
      <span>{data.post.readingTime.text}</span>
    </div>
  </Section>

  <Section>
    <!-- eslint-disable-next-line svelte/no-at-html-tags -->
    {@html data.post.html}
  </Section>
  <Section>
    <H2>Comments</H2>
    <UntypedGiscus
      repo="jreinhold/reinhold.is"
      repoId="MDEwOlJlcG9zaXRvcnk5ODkxOTIyMw=="
      mapping="number"
      term={String(data.post.discussionNumber)}
      reactionsEnabled="1"
      inputPosition="top"
      theme="light"
      lang="en"
      loading="lazy"
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
