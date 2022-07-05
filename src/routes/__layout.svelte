<script context="module" lang="ts">
  import { getSunTheme } from "$lib/get-sun-theme";

  import "../app.css";

  export const load: import("@sveltejs/kit").Load = async ({ session }) => {
    const theme = getSunTheme(session.countryCode);
    return {
      props: {
        theme,
      },
    };
  };
</script>

<script lang="ts">
  export let theme: string;
</script>

<slot />

<svelte:head>
  <link rel="stylesheet" href="/themes/{theme}.css" />
</svelte:head>
