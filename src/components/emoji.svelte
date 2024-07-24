<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements";

  const { children, ...props }: HTMLAttributes<HTMLSpanElement> = $props();
</script>

<span {...props}>
  {#if children}
    {@render children()}
  {/if}
</span>

<style>
  span {
    font-family: "Apple Color Emoji", "Segoe UI Emoji", "Noto Color Emoji";
  }
</style>
