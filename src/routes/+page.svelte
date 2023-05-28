<script lang="ts">
  import BaseHead from "../components/base-head.svelte";

  import Hero from "../components/index-sections/hero.svelte";
  import SocialLinks from "../components/index-sections/reachable-at/reachable-at-section.svelte";
  import AboutMe from "../components/index-sections/doing-an-intro/doing-an-intro.svelte";
  import FakeWriting from "../components/index-sections/writing-with-you/writing-with-you.svelte";
  import Ratings from "../components/index-sections/ratings/ratings-section.svelte";
  import Footer from "../components/footer.svelte";
  import Blogging from "../components/index-sections/blogging.svelte";

  export let data;
  let title = "Jeppe Reinhold";
  let description = "reinhold.is Jeppe's Personal Website";
  let permalink = "https://reinhold.is/";
</script>

<BaseHead {title} {description} {permalink} />
<div class="sections-container">
  <Hero />
  <Blogging posts={data.posts} />
  <SocialLinks />
  <AboutMe />
  <Ratings />
  <FakeWriting />
  <Footer />
</div>

<style lang="postcss">
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
