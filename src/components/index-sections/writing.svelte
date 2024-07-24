<script lang="ts">
  import type { Post } from "$lib/posts";
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
        <Link href={`/writing-about/${post.slug}`} rel="noopener">
          <h3>{post.title}</h3>
          <p>{post.subtitle}</p>
          <p class="meta">
            {#if post.publishedAt}
              <span>Published: {post.publishedAt.toLocaleDateString()}</span>
            {/if}
            <span>{post.readingTime.text} read</span>
          </p>
        </Link>
      {/each}
    </div>
  </Section>
{/if}
