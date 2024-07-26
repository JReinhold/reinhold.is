<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements";

  const { children, ...props }: HTMLAttributes<HTMLParagraphElement> = $props();
</script>

<p {...props}>
  {#if children}
    {@render children()}
  {/if}
</p>

<style lang="postcss">
  p {
    padding-bottom: var(--size-2);
  }
</style>
