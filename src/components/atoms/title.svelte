<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements";

  const { children, ...props }: HTMLAttributes<HTMLHeadingElement> = $props();
</script>

<h1 {...props}>
  {#if children}
    {@render children()}
  {/if}
</h1>

<style lang="postcss">
  h1 {
    font-size: var(--font-size-fluid-3);
  }
</style>
