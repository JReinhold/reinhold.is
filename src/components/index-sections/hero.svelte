<script lang="ts">
  import Portrait from "../portrait.svelte";
  import { page } from "$app/stores";

  const { theme } = $page.stuff;
</script>

<div class="container">
  <div class="portrait-positioner">
    <Portrait />
  </div>
  <section>
    <h1>👋 Hi, Jeppe Reinhold.is me!</h1>
    <div>
      <p>I’m a software engineer 👨‍💻, hobby farmer 🧑‍🌾 and entrepreneur 🚀.</p>
      <p>
        I enjoy nature, building great user experiences and tractoring. My
        favorite part of the world is the forrest just outside my door near
        <a
          href="https://goo.gl/maps/ae3A6dXX89v"
          target="_blank"
          aria-label="see aarhus google maps"
        >
          Aarhus, Denmark 🇩🇰
        </a>
        where I live with my wonderful family 👨‍👩‍👧‍👦.
      </p>
      <p>
        I'm also passionate about
        <a href="https://typescriptlang.org" target="_blank"> TypeScript</a>,
        <a href="https://svelte.dev" target="_blank"> Svelte</a>,
        <a href="https://reactjs.org" target="_blank"> React</a>,
        <a href="https://astro.build" target="_blank"> Astro</a>,
        <a href="https://nodejs.org" target="_blank"> Node.js</a>, and the
        JavaScript ecosystem in general.
      </p>
      <p>
        You're currently <a
          href="https://github.com/JReinhold/reinhold.is/pull/33"
          >getting the {theme.sun.substring(2)} experience</a
        > on this site, come back later for another experience.
      </p>
    </div>
  </section>
</div>

<style>
  .container {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--size-4);
  }

  @media (max-width: 767px) {
    section {
      margin-top: calc(-1 * var(--size-12));
    }
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
