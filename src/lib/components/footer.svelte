<script lang="ts">
  import Link from "./atoms/link.svelte";
</script>

<footer>
  <span>
    Built by Jeppe with help from <Link href="https://jkelstrup.com">Jonas</Link
    >, using <Link href="https://kit.svelte.dev" target="_blank">SvelteKit</Link
    >, source on
    <Link href="https://github.com/jreinhold/reinhold.is">GitHub</Link>,
    deployed to
    <Link href="https://pages.cloudflare.com">Cloudflare Pages</Link>.
    Backgrounds by Apple.
  </span>
</footer>

<style lang="postcss">
  footer {
    display: flex;
    justify-content: center;

    margin: 0 var(--size-fluid-1);
    padding: var(--size-fluid-2);
    gap: var(--size-1);

    border-radius: var(--radius-3);

    font-size: var(--font-size-0);

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
