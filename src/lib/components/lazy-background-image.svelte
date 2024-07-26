<script lang="ts">
  import type { Theme } from "$lib/get-sun-theme";
  import { onMount } from "svelte";

  const { theme }: { theme: Theme } = $props();

  const lowResImageSource = $derived(`/backgrounds/${theme.key}-200.webp`);
  const highResImageSource = $derived(`/backgrounds/${theme.key}-2000.webp`);

  let highResLoaded = $state(false);

  onMount(() => {
    const highResImage = new Image();
    // this line here triggers the browser to load the image
    highResImage.src = highResImageSource;
    highResImage.onload = () => {
      highResLoaded = true;
    };
  });
</script>

<img
  class:blur={!highResLoaded}
  src={highResLoaded ? highResImageSource : lowResImageSource}
  alt="background, sandy beach"
/>

<style lang="postcss">
  img {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;

    /* from https://taylor.callsen.me/working-with-hero-image-height-in-mobile-browsers/ */
    height: 100lvh;

    z-index: -1;
    user-select: none;
    object-fit: cover;
    pointer-events: none;
    transition: 1s filter ease-out;
  }

  .blur {
    filter: blur(30px);
  }
</style>
