<script lang="ts">
  import SectionHeading from "../section-heading.svelte";
  import Icon from "../static-icon.svelte";

  const id = "reachable-at";
</script>

<section {id}>
  <SectionHeading>🤝/{id}</SectionHeading>
  <div>
    <a rel="me" href="https://fosstodon.org/@reinhold">
      <Icon name="fa6-brands:mastodon" />
      @reinhold
    </a>
    <a rel="me" href="https://discordapp.com/users/303516516039655427">
      <Icon name="fa6-brands:discord" />
      JReinhold
    </a>
    <a rel="me" href="https://x.com/drreinhold">
      <Icon name="fa-brands:x-twitter" />
      @DrReinhold
    </a>
    <a rel="me" href="https://github.com/jreinhold">
      <Icon name="fa-brands:github-square" />
      JReinhold
    </a>
    <a rel="me" href="https://linkedin.com/in/jeppereinhold">
      <Icon name="fa-brands:linkedin" />
      Jeppe Reinhold
    </a>
    <a rel="me" href="mailto:jeppe@reinhold.is">
      <Icon name="heroicons-solid:mail" />
      jeppe@reinhold.is
    </a>
  </div>
</section>

<style>
  div {
    display: grid;
    grid-template-columns: repeat(2, minmax(8rem, 1fr));
    align-items: center;
    gap: var(--size-4);
  }

  a {
    display: flex;
    flex-direction: column;
    place-items: center;
    text-align: center;
    padding: var(--size-4);
    font-weight: var(--font-weight-5);
    gap: var(--size-3);
    border-radius: 1.1rem;
    transition: transform 0.1s ease-out;
  }

  @supports (backdrop-filter: blur(20px)) {
    a {
      border: var(--border-size-2) solid hsl(var(--surface-4-hsl) / 60%);
      background-color: hsl(var(--surface-4-hsl) / 30%);
    }
  }

  /* stronger background color when backdrop cannot be blurred */
  @supports not (backdrop-filter: blur(20px)) {
    a {
      border: var(--border-size-2) solid hsl(var(--gray-0-hsl));
      background-color: hsl(var(--gray-0-hsl) / 90%);
    }
  }

  a:hover {
    transform: scale(1.03);
  }

  :global([svelte-icon]) {
    width: var(--size-7);
    height: var(--size-7);
  }
</style>
