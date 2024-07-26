<script lang="ts">
  import type { HTMLAnchorAttributes } from "svelte/elements";

  const { children, ...props }: HTMLAnchorAttributes = $props();
</script>

<a {...props}>
  {#if children}
    {@render children()}
  {/if}
</a>

<style lang="postcss">
  a {
    text-decoration-color: var(--theme-accent);
  }
</style>
