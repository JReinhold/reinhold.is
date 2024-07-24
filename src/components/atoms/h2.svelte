<script lang="ts">
  import type { Snippet } from "svelte";

  const { children }: { children: Snippet } = $props();
</script>

<h2>{@render children()}</h2>

<style lang="postcss">
  h2 {
    font-size: var(--font-size-fluid-2);
    font-weight: var(--font-weight-6);
  }
</style>
