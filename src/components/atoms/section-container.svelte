<script lang="ts">
  import type { Snippet } from "svelte";

  const { children, ...props }: { children: Snippet } = $props();
</script>

<div {...props}>{@render children()}</div>

<style lang="postcss">
  div {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: var(--size-fluid-3);
    max-width: calc(75ch + var(--size-fluid-2));
    margin: auto;
    padding: var(--size-7) 0;
  }
</style>
