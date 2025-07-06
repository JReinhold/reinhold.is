<script lang="ts">
  import Portrait from "../portrait.svelte";
  import { page } from "$app/stores";
  import Title from "../atoms/title.svelte";
  import Link from "../atoms/link.svelte";
  import Paragraph from "../atoms/paragraph.svelte";
  import Section from "../atoms/section.svelte";
  import BlueSkyIcon from "virtual:icons/fa6-brands/bluesky";
  import DiscordIcon from "virtual:icons/fa6-brands/discord";
  import GitHubIcon from "virtual:icons/fa6-brands/github";
  import LinkedInIcon from "virtual:icons/fa6-brands/linkedin";

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
        I’m a software engineer 👨‍💻, hobby lumber jack 🪵, husband and dad of 3.
        👨‍🌾☀️⚓🌱👩‍🌾
      </Paragraph>
      <Paragraph>
        I enjoy the nature and building great user experiences - especially if
        the users are likeminded engineers. My favorite part of the world is the
        forrest just outside my door near
        <Link
          href="https://maps.app.goo.gl/yBCzYPgqvTeXWSbd9"
          target="_blank"
          rel="noopener"
          aria-label="see Viborg Google Maps"
        >
          Viborg, Denmark 🇩🇰
        </Link>
        where I live with my wonderful family 👨‍👩‍👧‍👦.
      </Paragraph>
      <Paragraph>
        I'm passionate about
        <a href="https://svelte.dev" rel="noopener" target="_blank">Svelte</a>,
        <a href="https://vite.dev" rel="noopener" target="_blank">Vite</a>,
        building great APIs, and the JavaScript ecosystem in general.
      </Paragraph>
      <Paragraph>
        You're currently <Link
          href="https://github.com/JReinhold/reinhold.is/pull/33"
          >getting the {theme.key.substring(2)} experience</Link
        > on this site, come back later for another experience.
      </Paragraph>
      <div class="social-links">
        <a
          rel="me noopener"
          href="https://bsky.app/profile/reinhold.is"
          target="_blank"
          title="@reinhold.is"
          aria-label="Follow me on Bluesky, I'm reinhold.is"
        >
          <BlueSkyIcon width={30} height={30} />
        </a>
        <a
          rel="me noopener"
          href="https://discordapp.com/users/303516516039655427"
          target="_blank"
          title="@JReinhold"
          aria-label="Connect with me on Discord, I'm JReinhold"
        >
          <DiscordIcon width={30} height={30} />
        </a>
        <a
          rel="me noopener"
          href="https://github.com/jreinhold"
          target="_blank"
          title="@JReinhold"
          aria-label="View my GitHub profile, I'm JReinhold"
        >
          <GitHubIcon width={30} height={30} />
        </a>
        <a
          rel="me noopener"
          href="https://linkedin.com/in/jeppereinhold"
          target="_blank"
          title="Jeppe Reinhold"
          aria-label="Connect with me on LinkedIn, I'm Jeppe Reinhold"
        >
          <LinkedInIcon width={30} height={30} />
        </a>
      </div>
    </div>
  </Section>
</div>

<style>
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

  .social-links {
    display: flex;
    align-items: center;
    gap: var(--size-4);
  }
</style>
