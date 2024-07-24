<script lang="ts">
  import type { Snippet } from "svelte";

  const { children }: { children: Snippet } = $props();
</script>

<h1>{@render children()}</h1>

<style lang="postcss">
  h1 {
    font-size: var(--font-size-fluid-3);
  }
</style>
