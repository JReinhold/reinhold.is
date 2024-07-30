<script lang="ts">
  import Section from "../../atoms/section.svelte";
  import SectionHeading from "../../atoms/section-heading.svelte";
  import ReachableAtLink from "./reachable-at-link.svelte";

  import BlueSkyIcon from "virtual:icons/fa6-brands/bluesky";
  import DiscordIcon from "virtual:icons/fa6-brands/discord";
  import XIcon from "virtual:icons/fa6-brands/x-twitter";
  import GitHubIcon from "virtual:icons/fa6-brands/github-square";
  import LinkedInIcon from "virtual:icons/fa6-brands/linkedin";
  import EMailIcon from "virtual:icons/heroicons-solid/mail";

  const id = "reachable-at";
</script>

<Section {id}>
  <SectionHeading>🤝/{id}</SectionHeading>
  <div class="links">
    <ReachableAtLink href="https://twitter.com/drreinhold">
      <XIcon />
      @DrReinhold
    </ReachableAtLink>
    <ReachableAtLink href="https://discordapp.com/users/303516516039655427">
      <DiscordIcon />
      jreinhold
    </ReachableAtLink>
    <ReachableAtLink href="https://github.com/jreinhold">
      <GitHubIcon />
      JReinhold
    </ReachableAtLink>
    <ReachableAtLink href="https://bsky.app/profile/reinhold.is">
      <BlueSkyIcon />
      reinhold.is
    </ReachableAtLink>
    <ReachableAtLink href="https://linkedin.com/in/jeppereinhold">
      <LinkedInIcon />
      Jeppe Reinhold
    </ReachableAtLink>
    <ReachableAtLink href="mailto:jeppe@reinhold.is">
      <EMailIcon />
      jeppe@reinhold.is
    </ReachableAtLink>
  </div>
</Section>

<style lang="postcss">
  .links {
    display: grid;
    grid-template-columns: repeat(2, minmax(8rem, 1fr));
    align-items: center;
    gap: var(--size-4);
  }
</style>
