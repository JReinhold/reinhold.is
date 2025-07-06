<script module>
  export { default as p } from "../atoms/paragraph.svelte";
</script>

<script lang="ts">
  import type { Snippet } from "svelte";

  const { children }: { children: Snippet } = $props();
</script>

{#if children}
  {@render children()}
{/if}
