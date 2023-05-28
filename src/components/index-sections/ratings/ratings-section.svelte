<script lang="ts">
  import Link from "../../atoms/link.svelte";
  import Paragraph from "../../atoms/paragraph.svelte";
  import SectionHeading from "../../atoms/section-heading.svelte";
  import Section from "../../atoms/section.svelte";
  import Rating from "./rating.svelte";

  const id = "rating-himself";
</script>

<Section {id}>
  <SectionHeading>🌟/{id}</SectionHeading>
  <Paragraph>
    As any succesful hiring manager will tell you, it's
    <Link
      target="_blank"
      href="https://uxdesign.cc/things-i-honestly-dont-want-to-see-in-your-portfolio-3d3497666ca8"
      >very important
    </Link> to put fixed, absolute ratings on your skills so everyone can see what
    you excel at. We all know that the best and most trustworthy person to assess
    your skillset is yourself.
  </Paragraph>
  <div class="ratings">
    <Rating text="Sarcasm" amount={5} />
    <Rating text="Counting" amount={3} max={4} />
    <Rating text="Speling" amount={3.5} />
    <Rating
      text="Consistency"
      amount={2.5}
      iconFilled="ion:star"
      iconHalf="ion:star-half"
      iconEmpty="ion:star-outline"
    />
    <Rating text="Going to bed early" amount={2} />
    <Rating text="CSS Layout" amount={4} misalign />
    <Rating text="Finishing side projects" amount={0} />
    <Rating text="Promoting myself" amount={0.5} />
  </div>
</Section>

<style lang="postcss">
  .ratings {
    display: grid;
    gap: var(--size-2);
    grid-template-columns: 1fr 1fr;
    align-items: center;
  }
</style>
