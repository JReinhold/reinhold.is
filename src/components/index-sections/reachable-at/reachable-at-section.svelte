<script lang="ts">
  import Section from "../../atoms/section.svelte";
  import SectionHeading from "../../atoms/section-heading.svelte";
  import ReachableAtLink from "./reachable-at-link.svelte";

  const id = "reachable-at";
</script>

<Section {id}>
  <SectionHeading>🤝/{id}</SectionHeading>
  <div class="links">
    <ReachableAtLink
      href="https://fosstodon.org/@reinhold"
      iconName="fa6-brands:mastodon"
    >
      @reinhold
    </ReachableAtLink>
    <ReachableAtLink
      href="https://discordapp.com/users/303516516039655427"
      iconName="fa6-brands:discord"
    >
      JReinhold#4884
    </ReachableAtLink>
    <ReachableAtLink
      href="https://twitter.com/drreinhold"
      iconName="fa-brands:x-twitter"
    >
      @DrReinhold
    </ReachableAtLink>
    <ReachableAtLink
      href="https://github.com/jreinhold"
      iconName="fa-brands:github-square"
    >
      JReinhold
    </ReachableAtLink>
    <ReachableAtLink
      href="https://linkedin.com/in/jeppereinhold"
      iconName="fa-brands:linkedin"
    >
      Jeppe Reinhold
    </ReachableAtLink>
    <ReachableAtLink
      href="mailto:jeppe@reinhold.is"
      iconName="heroicons-solid:mail"
    >
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
