<script lang="ts">
  import BaseHead from "$lib/components/base-head.svelte";

  import Hero from "$lib/components/index-sections/hero.svelte";
  import SocialLinks from "$lib/components/index-sections/reachable-at/reachable-at-section.svelte";
  import AboutMe from "$lib/components/index-sections/about-me/about-me-section.svelte";
  import FakeWriting from "$lib/components/index-sections/writing-with-you/writing-with-you.svelte";
  import Ratings from "$lib/components/index-sections/ratings/ratings-section.svelte";
  import Footer from "$lib/components/footer.svelte";
  import Writing from "$lib/components/index-sections/writing.svelte";
  import SectionContainer from "$lib/components/atoms/section-container.svelte";

  const title = "Jeppe Reinhold";
  const description = "reinhold.is Jeppe's Personal Website";
  const permalink = "https://reinhold.is/";

  const { data } = $props();
</script>

<BaseHead {title} {description} {permalink} />
<SectionContainer>
  <Hero />
  <Writing posts={data.posts} />
  <SocialLinks />
  <AboutMe />
  <Ratings />
  <FakeWriting />
  <Footer />
</SectionContainer>
