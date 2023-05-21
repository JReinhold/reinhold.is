<script lang="ts">
  import { toLocaleDateString } from "$lib/format-date";

  export let data;
</script>

{#each data.post as post}
  <h3>{post.title}</h3>
  <p>{post.subtitle}</p>

  <div>
    Published: {toLocaleDateString(post.publishedAt)}
  </div>
  <div>{post.readingTime.text}</div>

  {@html post.html}
{/each}
