<script context="module" lang="ts">
  import { getSunTheme, type Theme } from "$lib/get-sun-theme";

  import "../app.css";

  export const load: import("@sveltejs/kit").Load = async ({ session }) => {
    const theme = getSunTheme(session.countryCode);
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

<slot />

<svelte:head>
  <link rel="stylesheet" href="/themes/{theme.sun}.css" />
  <link rel="stylesheet" href="/themes/{theme.mode}.css" />
</svelte:head>
