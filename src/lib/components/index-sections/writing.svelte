<script lang="ts">
  import type { Post } from "$lib/posts";
  import Section from "../atoms/section.svelte";
  import Link from "../atoms/link.svelte";
  import SectionHeading from "../atoms/section-heading.svelte";
  import ExternalLinkIcon from "virtual:icons/fa-solid/external-link-alt";

  const id = "writing-and-speaking";

  const { posts }: { posts: Post[] } = $props();
</script>

{#if posts.length > 0}
  <Section {id}>
    <SectionHeading>💬/{id}</SectionHeading>
    <ul class="post-list">
      {#each posts as post (post.metadata.slug)}
        {@const isExternal = "url" in post && post.url}
        <li class="post-item">
          <Link
            href={`/writing-about/${post.metadata.slug}`}
            rel={isExternal ? "noopener me external" : undefined}
            class="link"
            target={isExternal ? "_blank" : "_self"}
          >
            <span class="title">
              {post.metadata.title}
              {#if isExternal}
                <ExternalLinkIcon class="external-link-icon" />
              {/if}
            </span>
            <div class="subtitle">{post.metadata.subtitle}</div>
            <div class="meta">
              <span>{post.metadata.readingTime.text}</span>
              <span>{post.metadata.publishedAt!.toLocaleDateString()}</span>
            </div>
          </Link>
        </li>
      {/each}
    </ul>
  </Section>
{/if}

<style>
  .post-list {
    display: flex;
    flex-direction: column;
    list-style: none;
    margin: 0;
    padding: 0;
    gap: var(--size-4);
  }

  .post-item {
    max-inline-size: none;
    padding-inline-start: initial;
  }

  :global(.link) {
    display: block;
    text-decoration: none;
    color: var(--color-text);
  }

  .title {
    color: var(--theme-accent);
    text-decoration: underline;
  }

  :global(.external-link-icon) {
    height: var(--size-3);
    display: inline-block;
    vertical-align: baseline;
    margin-inline-start: var(--size-1);
  }

  .meta {
    display: flex;
    justify-content: space-between;
    gap: var(--size-5);
    font-size: var(--font-size-2);
    color: var(--color-text-secondary);
  }
</style>
