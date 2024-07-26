<script lang="ts">
  import Portrait from "../portrait.svelte";
  import { page } from "$app/stores";
  import Title from "../atoms/title.svelte";
  import Link from "../atoms/link.svelte";
  import Paragraph from "../atoms/paragraph.svelte";
  import Section from "../atoms/section.svelte";

  const { theme } = $page.data;
</script>

<div class="container">
  <div class="portrait-positioner">
    <Portrait />
  </div>
  <Section>
    <Title>👋 Hi, Jeppe Reinhold.is me!</Title>
    <div>
      <Paragraph>
        I’m a software engineer 👨‍💻, hobby lumber jack 🪵, husband 👩‍❤️‍👨 and dad.
      </Paragraph>
      <Paragraph>
        I enjoy the nature and building great user experiences - especially if
        the users are likeminded engineers. My favorite part of the world is the
        forrest just outside my door near
        <Link
          href="https://goo.gl/maps/ae3A6dXX89v"
          target="_blank"
          aria-label="see aarhus google maps"
        >
          Aarhus, Denmark 🇩🇰
        </Link>
        where I live with my wonderful family 👨‍👩‍👧‍👦.
      </Paragraph>
      <Paragraph>
        I'm also passionate about
        <Link href="https://typescriptlang.org" target="_blank">
          TypeScript</Link
        >,
        <Link href="https://svelte.dev" target="_blank">Svelte</Link>,
        <Link href="https://astro.build" target="_blank">Astro</Link>,
        <Link href="https://nodejs.org" target="_blank">Node.js</Link>, and the
        JavaScript ecosystem in general.
      </Paragraph>
      <Paragraph>
        You're currently <Link
          href="https://github.com/JReinhold/reinhold.is/pull/33"
          >getting the {theme.key.substring(2)} experience</Link
        > on this site, come back later for another experience.
      </Paragraph>
    </div>
  </Section>
</div>

<style lang="postcss">
  .container {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--size-4);
  }

  @media (min-width: 768px) {
    .portrait-positioner {
      position: absolute;
      top: 4rem;
      right: -6rem;
      z-index: 2;
    }
  }
</style>
