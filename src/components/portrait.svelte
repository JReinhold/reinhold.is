<script lang="ts">
  import { fly } from "svelte/transition";

  const IMAGE_AMOUNT = 9;
  let currentImage = 0;

  // polyfill requestIdleCallback
  const rIC =
    typeof requestIdleCallback === "undefined"
      ? (callback: () => void) => callback()
      : requestIdleCallback;

  let prefetchedImages = [0, 1];
  // prefetch the second image on load
  if (typeof Image !== "undefined") {
    rIC(() => {
      const image = new Image();
      // this line here triggers the browser to fetch the image
      image.src = `/portraits/1.webp`;
    });
  }

  const nextImage = (event: PointerEvent) => {
    if (window.matchMedia("(prefers-reduced-data: reduce)").matches) {
      // disable multiple images on data saver mode
      return;
    }

    (event.currentTarget as HTMLButtonElement).classList.remove("inactive");

    if (prefetchedImages.length < IMAGE_AMOUNT) {
      // prefetch next unprefetched image, if any
      rIC(() => {
        const nextImageToPrefetch = prefetchedImages.length;
        prefetchedImages.push(nextImageToPrefetch);
        const image = new Image();
        image.src = `/portraits/${nextImageToPrefetch}.webp`;
      });
    }
    if (currentImage === IMAGE_AMOUNT - 1) {
      // wrap around the list to start over
      currentImage = 0;
    } else {
      currentImage++;
    }
  };

  let debounceTimeout: ReturnType<typeof setTimeout>;
  const debouncedInactivateImage = (event: TouchEvent) => {
    if (window.matchMedia("(prefers-reduced-data: reduce)").matches) {
      // disable portrait interaction on data saver mode
      return;
    }

    const element = event.currentTarget as HTMLButtonElement;
    if (debounceTimeout) {
      clearTimeout(debounceTimeout);
    }
    debounceTimeout = setTimeout(() => {
      element.classList.add("inactive");
    }, 1000);
  };
</script>

<button
  on:pointerup={nextImage}
  on:touchend={debouncedInactivateImage}
  class="container"
>
  {#key currentImage}
    <img
      src={`/portraits/${currentImage}.webp`}
      alt="portrait of me"
      class={`portrait-${currentImage}`}
      in:fly={{ x: 160, opacity: 1, duration: 300, delay: 0 }}
      out:fly={{ x: -160, opacity: 1, duration: 300, delay: 0 }}
    />
  {/key}
</button>

<style lang="postcss">
  .container {
    position: relative;
    overflow: hidden;
    border-radius: var(--radius-blob-2);
    height: var(--size-14);
    padding: 0;
    transform-origin: center center;
    transition: transform 0.2s ease-in-out;
  }
  .container:hover:not(.inactive) {
    transform: scale(1.1);
  }

  .container:hover:not(.inactive) > img {
    max-height: 100%;
    top: 0;
  }

  @media (max-width: 767px) {
    .container {
      width: var(--size-13);
    }
  }

  @media (min-width: 768px) {
    .container {
      width: var(--size-12);
    }
  }

  img {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 300%;
    max-height: 300%;
    object-fit: cover;
    transition: all 0.2s ease-in-out;
  }

  /* these styles determines where to zoom in on the image when not hovering */
  .portrait-0 {
    top: -3.125rem;
    object-position: 46%;
  }
  .portrait-1 {
    top: -4.375rem;
    object-position: 54%;
  }
  .portrait-2 {
    top: -2.5rem;
    object-position: 42%;
  }
  .portrait-3 {
    top: -2.3125rem;
    object-position: 50%;
  }
  .portrait-4 {
    top: -3.75rem;
    object-position: 40%;
  }
  .portrait-5 {
    top: -21.4375rem;
    object-position: 49%;
  }
  .portrait-6 {
    top: -4.1875rem;
    object-position: 43%;
  }
  .portrait-7 {
    top: -1.25rem;
    object-position: 54%;
  }
  .portrait-8 {
    top: -0.625rem;
    object-position: 34%;
  }
</style>
