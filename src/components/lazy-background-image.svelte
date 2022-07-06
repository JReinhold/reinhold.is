<script lang="ts">
  import type { Theme } from "$lib/get-sun-theme";

  import { onMount } from "svelte";

  export let theme: Theme;

  const lowResImageSource = `/backgrounds/${theme.sun}-200.webp`;
  const highResImageSource = `/backgrounds/${theme.sun}-2000.webp`;

  onMount(() => {
    const highResImage = new Image();
    // this line here triggers the browser to load the image
    highResImage.src = highResImageSource;

    // when it is done loading, replace the existing image with the high res and unblur it
    highResImage.onload = () => {
      const backgroundImageElement = document.querySelector(
        "#background-image",
      ) as HTMLImageElement;
      backgroundImageElement.src = highResImageSource;
      backgroundImageElement.classList.remove("blur");
    };
  });
</script>

<img id="background-image" class="blur" src={lowResImageSource} alt="" />

<style>
  img {
    z-index: -1;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: 1s filter ease-out;
    user-select: none;
    object-fit: cover;
    pointer-events: none;
  }

  .blur {
    filter: blur(30px);
  }
</style>
