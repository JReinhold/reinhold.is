<script module lang="ts">
  import "../app.css";
</script>

<script lang="ts">
  import type { Snippet } from "svelte";
  import LazyBackgroundImage from "$lib/components/lazy-background-image.svelte";
  import type { LayoutData } from "./$types";
  import Nav from "$lib/components/nav.svelte";
  import SectionContainer from "$lib/components/atoms/section-container.svelte";

  const { data, children }: { data: LayoutData; children: Snippet } = $props();
</script>

<LazyBackgroundImage theme={data.theme} />
<SectionContainer>
  <Nav />
  {@render children()}
</SectionContainer>

<svelte:head>
  <link rel="stylesheet" href="/themes/{data.theme.key}.css" />
  <link rel="stylesheet" href="/themes/{data.theme.mode}.css" />
  <!-- prettier-ignore-start -->
  <style>
    {@html `
      body {
        background-color: ${data.theme.mode === "light" ? "var(--gray-1)" : "var(--gray-9)"};
      }
    `}
  </style>
</svelte:head>
