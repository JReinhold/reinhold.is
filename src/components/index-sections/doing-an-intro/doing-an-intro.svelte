<script lang="ts">
  import SectionHeading from "../../atoms/section-heading.svelte";
  import Section from "../../atoms/section.svelte";
  import Long from "./long.svelte";
  import Short from "./short.svelte";
  let isShortText = true;
  $: toggleText = isShortText ? "quick" : "longer";
  $: Content = isShortText ? Short : Long;
  const toggle = () => {
    isShortText = !isShortText;
  };
</script>

<Section id="doing-a-quick-intro">
  <SectionHeading>
    🙋‍♂️/doing-a-<button on:click={toggle}>{toggleText}</button>-intro
  </SectionHeading>
  <svelte:component this={Content} />
</Section>

<style lang="postcss">
  button {
    font-size: var(--font-size-fluid-2);
    background: transparent;
    color: var(--link);
    padding: 0;
  }
  button:hover {
    text-decoration: underline;
  }
</style>
