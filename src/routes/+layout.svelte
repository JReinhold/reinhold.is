<script context="module" lang="ts">
  import "../app.css";
</script>

<script lang="ts">
  import LazyBackgroundImage from "../components/lazy-background-image.svelte";
  import type { LayoutData } from "./$types";
  export let data: LayoutData;
  const { theme } = data;
</script>

<LazyBackgroundImage {theme} />
<slot />

<svelte:head>
  <link rel="stylesheet" href="/themes/{theme.key}.css" />
  <link rel="stylesheet" href="/themes/{theme.mode}.css" />
</svelte:head>
