<script lang="ts">
  import type { Post } from "$lib/posts";
  import SectionHeading from "../section-heading.svelte";

  const id = "blogging";

  export let posts: Post[];
</script>

<section {id}>
  <SectionHeading>💭/{id}</SectionHeading>
  <div>
    {#each posts as post}
      <a href={`/blogging-about/${post.slug}`} rel="noopener">
        <h3>{post.title}</h3>
        <p>{post.subtitle}</p>
        <p class="meta">
          <span>Published: {post.publishedAt.toLocaleDateString()}</span>
          <span>{post.readingTime.text} read</span>
        </p>
      </a>
    {/each}
  </div>
</section>

<style>
</style>
