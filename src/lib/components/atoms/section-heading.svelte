<script lang="ts">
  import type { Snippet } from "svelte";
  import H2 from "./h2.svelte";

  const { children }: { children: Snippet } = $props();
</script>

<div>
  <subtitle>reinhold.is</subtitle>
  <H2 class="section-heading">
    {@render children()}
  </H2>
</div>

<style>
  div {
    display: flex;
    flex-direction: column;
    font-family: var(--font-mono);
    font-weight: var(--font-weight-8);
    padding-bottom: var(--size-2);
  }
  :global(.section-heading) {
    font-family: var(--font-mono);
  }
  subtitle {
    color: hsl(var(--text-2-hsl) / 70%);
  }
</style>
