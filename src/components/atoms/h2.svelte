<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements";

  const { children, ...props }: HTMLAttributes<HTMLHeadingElement> = $props();
</script>

<h2 {...props}>
  {#if children}
    {@render children()}
  {/if}
</h2>

<style lang="postcss">
  h2 {
    font-size: var(--font-size-fluid-2);
    font-weight: var(--font-weight-6);
  }
</style>
