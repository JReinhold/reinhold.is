<script lang="ts">
  import type { ExternalPost, Post } from "$lib/posts";
  import Section from "../atoms/section.svelte";
  import Link from "../atoms/link.svelte";
  import SectionHeading from "../atoms/section-heading.svelte";

  const id = "writing";

  const { posts }: { posts: Post[] } = $props();
</script>

{#if posts.length > 0}
  <Section {id}>
    <SectionHeading>💭/{id}</SectionHeading>
    <div>
      {#each posts as post}
        <Link href={`/writing-about/${post.metadata.slug}`} rel="noopener">
          <h3>
            {#if (post as ExternalPost).url}
              <span>🔗</span>
            {/if}
            {post.metadata.title}
          </h3>
          <p>{post.metadata.subtitle}</p>
          <p class="meta">
            {#if post.metadata.publishedAt}
              <span
                >Published: {post.metadata.publishedAt.toLocaleDateString()}</span
              >
            {/if}
            <span>{post.metadata.readingTime.text} read</span>
          </p>
        </Link>
      {/each}
    </div>
  </Section>
{/if}
