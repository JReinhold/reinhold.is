<script lang="ts">
  import BaseHead from "../components/base-head.svelte";
  import LazyBackgroundImage from "../components/lazy-background-image.svelte";

  import Hero from "../components/index-sections/hero.svelte";
  import SocialLinks from "../components/index-sections/social-links.svelte";
  import AboutMe from "../components/index-sections/about-me/about-me-section.svelte";
  import FakeWriting from "../components/index-sections/fake-writing/fake-writing-section.svelte";
  import Ratings from "../components/index-sections/ratings/ratings-section.svelte";
  import Footer from "../components/footer.svelte";

  let title = "Jeppe Reinhold";
  let description = "reinhold.is Jeppe's Personal Website";
  let permalink = "https://reinhold.is/";
</script>

<BaseHead {title} {description} {permalink} />
<div class="sections-container">
  <LazyBackgroundImage />
  <Hero />
  <SocialLinks />
  <AboutMe />
  <FakeWriting />
  <Ratings />
  <Footer />
</div>

<style>
  .sections-container {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: var(--size-fluid-3);
    max-width: calc(75ch + var(--size-fluid-2));
    margin: auto;
    padding: var(--size-7) 0;
  }
</style>
