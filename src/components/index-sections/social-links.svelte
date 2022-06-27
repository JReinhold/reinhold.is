<script lang="ts">
  import SectionHeading from "../section-heading.svelte";
  import Icon from "../static-icon.svelte";

  const id = "reachable-at";
</script>

<section {id}>
  <SectionHeading>🤝/{id}</SectionHeading>
  <div>
    <a href="https://twitter.com/drreinhold" class="social-link">
      <Icon name="fa-brands:twitter-square" />
      @DrReinhold
    </a>
    <a href="https://github.com/jreinhold" class="social-link">
      <Icon name="fa-brands:github-square" />
      JReinhold
    </a>
    <a href="https://linkedin.com/in/jeppereinhold" class="social-link">
      <Icon name="fa-brands:linkedin" />
      Jeppe Reinhold
    </a>
    <a href="mailto:jeppe@reinhold.is" class="social-link">
      <Icon name="heroicons-solid:mail" />
      jeppe@reinhold.is
    </a>
  </div>
</section>

<style>
  div {
    display: grid;
    grid-template-columns: repeat(2, minmax(10rem, 1fr));
    align-items: center;
    gap: var(--size-4);
  }

  a {
    display: flex;
    flex-direction: column;
    place-items: center;
    padding: var(--size-4);
    font-weight: var(--font-weight-5);
    gap: var(--size-3);
    border-radius: 1.1rem;
    transition: transform 0.1s ease-out;
  }

  @supports (backdrop-filter: blur(20px)) {
    a {
      border: var(--border-size-2) solid hsl(var(--gray-0-hsl) / 50%);
      background-color: hsl(var(--gray-0-hsl) / 30%);
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
  }
</style>
