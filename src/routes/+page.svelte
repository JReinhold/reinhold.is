<script lang="ts">
  import BaseHead from "$lib/components/base-head.svelte";

  import Hero from "$lib/components/index-sections/hero.svelte";
  import AboutMe from "$lib/components/index-sections/about-me/about-me-section.svelte";
  import FakeWriting from "$lib/components/index-sections/writing-with-you/writing-with-you.svelte";
  import Ratings from "$lib/components/index-sections/ratings/ratings-section.svelte";
  import Footer from "$lib/components/footer.svelte";
  import Writing from "$lib/components/index-sections/writing.svelte";

  const title = "Jeppe Reinhold";
  const description = "reinhold.is Jeppe's Personal Website";
  const permalink = "https://reinhold.is/";

  const { data } = $props();
</script>

<BaseHead {title} {description} {permalink} />

<Hero />
<Writing posts={data.posts} />
<AboutMe />
<Ratings />
<FakeWriting />
<Footer />
