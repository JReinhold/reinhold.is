<script lang="ts">
  import H2 from "./h2.svelte";
</script>

<div>
  <subtitle> reinhold.is </subtitle>
  <H2>
    <slot />
  </H2>
</div>

<style lang="postcss">
  div {
    display: flex;
    flex-direction: column;
    font-family: var(--font-mono);
    font-weight: var(--font-weight-8);
    padding-bottom: var(--size-2);
  }
  subtitle {
    color: hsl(var(--text-2-hsl) / 70%);
  }
</style>
