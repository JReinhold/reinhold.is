<script context="module" lang="ts">
  import { getSunTheme, type Theme } from "$lib/get-sun-theme";
  import LazyBackgroundImage from "../components/lazy-background-image.svelte";

  import "../app.css";

  export const load: import("@sveltejs/kit").Load = async ({ session }) => {
    const theme = getSunTheme(session.countryCode);
    return {
      props: {
        theme,
        cf: (session as any).cf,
      },
      stuff: {
        theme,
      },
    };
  };
</script>

<script lang="ts">
  export let theme: Theme;
  export let cf: any;
</script>

<LazyBackgroundImage {theme} />
<slot />

<svelte:head>
  <link rel="stylesheet" href="/themes/{theme.key}.css" />
  <link rel="stylesheet" href="/themes/{theme.mode}.css" />
</svelte:head>

<section>
  <pre>
    <code>
      {cf}
    </code>
  </pre>
</section>
