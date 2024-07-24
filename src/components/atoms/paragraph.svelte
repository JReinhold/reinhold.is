<script lang="ts">
  import type { Snippet } from "svelte";

  const { children }: { children: Snippet } = $props();
</script>

<p>{@render children()}</p>

<style lang="postcss">
  p {
    padding-bottom: var(--size-2);
  }
</style>
