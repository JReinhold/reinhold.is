<script lang="ts">
  import type { Snippet } from "svelte";
  import Link from "../../atoms/link.svelte";
  import Icon from "../../static-icon.svelte";

  const {
    iconName,
    href,
    children,
  }: { iconName: string; href: string; children: Snippet } = $props();
</script>

<Link rel="me" target="_blank" {href}>
  <div class="link">
    <Icon name={iconName} />
    {@render children()}
  </div>
</Link>

<style lang="postcss">
  .link {
    display: flex;
    flex-direction: column;
    place-items: center;
    text-align: center;
    padding: var(--size-4);
    font-weight: var(--font-weight-5);
    gap: var(--size-3);
    border-radius: var(--radius-3);
    transition: transform 0.1s ease-out;

    &:hover {
      transform: scale(1.03);
    }

    @supports (backdrop-filter: blur(20px)) {
      border: var(--border-size-2) solid hsl(var(--surface-4-hsl) / 60%);
      background-color: hsl(var(--surface-4-hsl) / 30%);
    }
    /* stronger background color when backdrop cannot be blurred */
    @supports not (backdrop-filter: blur(20px)) {
      border: var(--border-size-2) solid hsl(var(--gray-0-hsl));
      background-color: hsl(var(--gray-0-hsl) / 90%);
    }
  }

  :global([svelte-icon]) {
    width: var(--size-7);
    height: var(--size-7);
  }
</style>
