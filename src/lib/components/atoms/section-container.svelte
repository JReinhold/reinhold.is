<script lang="ts">
  import type { Snippet } from "svelte";
  import type { HTMLAttributes } from "svelte/elements";

  const {
    children,
    ...props
  }: { children: Snippet } & HTMLAttributes<HTMLDivElement> = $props();
</script>

<div {...props}>{@render children()}</div>

<style>
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
