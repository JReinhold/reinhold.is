<script context="module" lang="ts">
  import type { Snippet } from "svelte";
  import "../app.css";
</script>

<script lang="ts">
  import LazyBackgroundImage from "../components/lazy-background-image.svelte";
  import type { LayoutData } from "./$types";

  const { data, children }: { data: LayoutData; children: Snippet } = $props();
</script>

<LazyBackgroundImage theme={data.theme} />
{@render children()}

<svelte:head>
  <link rel="stylesheet" href="/themes/{data.theme.key}.css" />
  <link rel="stylesheet" href="/themes/{data.theme.mode}.css" />
</svelte:head>
