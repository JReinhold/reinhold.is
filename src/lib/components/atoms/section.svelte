<script lang="ts">
  import type { Snippet } from "svelte";
  import type { HTMLAttributes } from "svelte/elements";

  /**
   * This type allows for two scenarios:
   * 1. An optional 'element' property defaulting to 'section' if not specified.
   * 2. A specific HTML element type when 'element' is explicitly set.
   *
   * The type ensures that only valid HTML attributes for the specified element
   * (or generic HTMLElement attributes for 'section') are allowed.
   *
   * The type leverages TypeScript's discriminated union and mapped types to
   * provide precise type checking and autocompletion based on the 'element' prop.
   *
   * Thank you Claude 3.5 Sonnet 🤖
   */
  type Props =
    | ({
        element?: "section";
        children: Snippet;
      } & HTMLAttributes<HTMLElement>)
    | {
        [K in keyof HTMLElementTagNameMap]: {
          element?: K;
          children: Snippet;
        } & HTMLAttributes<HTMLElementTagNameMap[K]>;
      }[keyof HTMLElementTagNameMap];

  const { element = "section", children, ...props }: Props = $props();
</script>

<svelte:element this={element} {...props} class={["section", props.class]}>
  {@render children()}
</svelte:element>

<style>
  .section {
    display: grid;
    grid-template-columns:
      [full-start] var(--size-fluid-2)
      [main-start] 1fr [main-end]
      var(--size-fluid-2) [full-end];

    :global(& > *) {
      grid-column: main;
    }

    margin: 0 var(--size-fluid-1);
    padding: var(--size-fluid-2) 0;
    gap: var(--size-1);

    border-radius: var(--radius-3);

    backdrop-filter: blur(var(--section-background-blur));
    background: hsl(var(--surface-1-hsl) / var(--section-background-opacity));

    @media (prefers-reduced-transparency: reduce), (prefers-contrast: more) {
      backdrop-filter: initial;
      background: var(--surface-1);
    }

    transition:
      backdrop-filter 0.5s ease,
      background 0.5s ease;
  }
</style>
