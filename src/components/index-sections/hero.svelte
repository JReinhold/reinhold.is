<script lang="ts">
  import Portrait from "../portrait.svelte";
  import { page } from "$app/stores";
  import Icon from "../static-icon.svelte";

  const { theme } = $page.data;
</script>

<div class="container">
  <div class="portrait-positioner">
    <Portrait />
  </div>
  <section>
    <h1>👋 Hi, Jeppe Reinhold.is me!</h1>
    <div>
      <p>I’m a software engineer 👨‍💻, hobby lumber jack 🪵, husband and dad of 3. 👨‍🌾☀️⚓🌱👩‍🌾</p>
      <p>
        I enjoy the nature and building great user experiences - especially if the users are likeminded engineers.
        My favorite part of the world is the forrest just outside my door near
        <a
          href="https://maps.app.goo.gl/yBCzYPgqvTeXWSbd9"
          target="_blank"
          aria-label="see Viborg Google Maps"
        >
          Viborg, Denmark 🇩🇰
        </a>
        where I live with my wonderful family 👨‍👩‍👧‍👦.
      </p>
      <p>
        I'm passionate about
        <a href="https://svelte.dev" target="_blank">Svelte</a>,
        <a href="https://vite.dev" target="_blank">Vite</a>, building great APIs, and the
        JavaScript ecosystem in general.
      </p>
      <p>
        You're currently <a
          href="https://github.com/JReinhold/reinhold.is/pull/33"
          >getting the {theme.key.substring(2)} experience</a
        > on this site, come back later for another experience.
      </p>
    </div>
    <div class="social-links">
      <a rel="me" href="https://bsky.app/profile/reinhold.is" target="_blank" aria-label="Follow me on Bluesky, I'm reinhold.is">
        <Icon name="fa6-brands:bluesky" />
      </a>
      <a rel="me" href="https://discordapp.com/users/303516516039655427" target="_blank" aria-label="Connect with me on Discord, I'm JReinhold">
        <Icon name="fa6-brands:discord" />
      </a>
      <a rel="me" href="https://github.com/jreinhold" target="_blank" aria-label="View my GitHub profile, I'm JReinhold">
        <Icon name="fa-brands:github-square" />
      </a>
      <a rel="me" href="https://linkedin.com/in/jeppereinhold" target="_blank" aria-label="Connect with me on LinkedIn, I'm Jeppe Reinhold">
        <Icon name="fa-brands:linkedin" />
      </a>
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

  .social-links {
    display: flex;
    align-items: center;
    gap: var(--size-4);
  }
</style>
