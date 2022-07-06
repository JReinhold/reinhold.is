<script lang="ts">
  import type { Theme } from "$lib/get-sun-theme";
  import { onMount } from "svelte";

  export let theme: Theme;

  const lowResImageSource = `/backgrounds/${theme.sun}-200.webp`;
  const highResImageSource = `/backgrounds/${theme.sun}-2000.webp`;

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
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
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
