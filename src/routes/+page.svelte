<script lang="ts">
  import BaseHead from "../components/base-head.svelte";

  import Hero from "../components/index-sections/hero.svelte";
  import SocialLinks from "../components/index-sections/reachable-at/reachable-at-section.svelte";
  import AboutMe from "../components/index-sections/doing-an-intro/doing-an-intro.svelte";
  import FakeWriting from "../components/index-sections/writing-with-you/writing-with-you.svelte";
  import Ratings from "../components/index-sections/ratings/ratings-section.svelte";
  import Footer from "../components/footer.svelte";
  import Writing from "../components/index-sections/writing.svelte";
  import SectionContainer from "../components/atoms/section-container.svelte";

  export let data;
  let title = "Jeppe Reinhold";
  let description = "reinhold.is Jeppe's Personal Website";
  let permalink = "https://reinhold.is/";
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
