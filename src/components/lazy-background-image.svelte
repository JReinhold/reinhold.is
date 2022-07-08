<script lang="ts">
  import type { Theme } from "$lib/get-sun-theme";
  import { onMount } from "svelte";

  export let theme: Theme;

  const lowResImageSource = `/backgrounds/${theme.key}-200.webp`;
  const highResImageSource = `/backgrounds/${theme.key}-2000.webp`;

  let highResLoaded = false;

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
  alt=""
/>

<style>
  img {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;

    /* from https://taylor.callsen.me/working-with-hero-image-height-in-mobile-browsers/ */
    height: 100vh;
    height: -moz-available;
    height: -webkit-fill-available;
    height: fill-available;

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
