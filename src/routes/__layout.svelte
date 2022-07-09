<script context="module" lang="ts">
  import { getSunTheme, type Theme } from "$lib/get-sun-theme";
  import LazyBackgroundImage from "../components/lazy-background-image.svelte";

  import "../app.css";

  export const load: import("@sveltejs/kit").Load = async ({ session }) => {
    const theme = getSunTheme(session.clientGeolocation);
    return {
      props: {
        theme,
      },
      stuff: {
        theme,
      },
    };
  };
</script>

<script lang="ts">
  export let theme: Theme;
</script>

<LazyBackgroundImage {theme} />
<slot />

<svelte:head>
  <link rel="stylesheet" href="/themes/{theme.key}.css" />
  <link rel="stylesheet" href="/themes/{theme.mode}.css" />
</svelte:head>
