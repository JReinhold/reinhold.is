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

<svelte:element this={element} {...props} class="section"
  >{@render children()}</svelte:element
>

<style lang="postcss">
  .section {
    display: flex;
    flex-direction: column;

    margin: 0 var(--size-fluid-1);
    padding: var(--size-fluid-2);
    gap: var(--size-1);

    border-radius: var(--radius-3);

    @supports (backdrop-filter: blur(30px)) {
      backdrop-filter: blur(30px);
      background: hsl(var(--surface-1-hsl) / 60%);
    }

    /* stronger background color when backdrop cannot be blurred */
    @supports not (backdrop-filter: blur(30px)) {
      background: hsl(var(--surface-1-hsl) / 90%);
    }
  }
</style>
