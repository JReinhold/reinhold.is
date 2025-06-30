<script lang="ts">
  import Link from "./atoms/link.svelte";
  import Section from "./atoms/section.svelte";
</script>

<Section element="footer">
  <div class="container">
    <span class="text-paragraph">
      Built with <Link
        href="https://svelte.dev"
        target="_blank"
        class="footer-link">Svelte</Link
      > and
      <Link href="https://open-props.style" target="_blank" class="footer-link"
        >Open Props</Link
      >. Source code is on
      <Link href="https://github.com/jreinhold/reinhold.is" class="footer-link"
        >GitHub</Link
      >, deployed to
      <Link href="https://pages.cloudflare.com" class="footer-link"
        >Cloudflare Pages</Link
      >. Backgrounds by Apple.
    </span>
  </div>
</Section>

<style>
  .container {
    display: flex;
    justify-content: center;
    text-align: center;
  }
  .text-paragraph {
    text-wrap: balance;
  }
  .text-paragraph,
  :global(.footer-link) {
    font-size: var(--font-size-1);
  }
</style>
