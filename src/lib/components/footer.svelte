<script lang="ts">
  import Link from "./atoms/link.svelte";
</script>

<footer>
  <span>
    Built with <a href="https://svelte.dev" target="_blank">Svelte</a> and
    <a href="https://open-props.style" target="_blank">Open Props</a>. Source
    code is on
    <a href="https://github.com/jreinhold/reinhold.is">GitHub</a>, deployed to
    <a href="https://pages.cloudflare.com">Cloudflare Pages</a>. Backgrounds by
    Apple.
  </span>
</footer>

<style>
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
