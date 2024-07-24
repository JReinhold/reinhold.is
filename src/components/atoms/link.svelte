<script lang="ts">
  import type { Snippet } from "svelte";

  const { children, ...props }: { children: Snippet } = $props();
</script>

<a {...props}>{@render children()}</a>

<style lang="postcss">
  a {
    text-decoration-color: var(--theme-accent);
  }
</style>
