<script lang="ts">
  import Paragraph from "../../atoms/paragraph.svelte";
  import SectionHeading from "../../atoms/section-heading.svelte";
  import Section from "../../atoms/section.svelte";

  const id = "introducing-himself";
</script>

<Section {id}>
  <SectionHeading>🙋‍♂️/{id}</SectionHeading>
  <Paragraph>
    I've always <strong>loved</strong> tinkering with software, electronics and
    engaging with the open source community. I currently work as an Open
    Sourcerer 🧙‍♂️ at
    <a href="https://chromatic.com" target="_blank">Chromatic</a>, spending all
    my time making
    <a href="https://storybook.js.org" target="_blank">Storybook 📚</a> better for
    everyone.
  </Paragraph>
  <Paragraph>
    I enjoy combining creativity and empathy to solve actual problems for real
    people, eg. by building excellent developer tooling, UX focused interfaces
    or facilitating communication between different stakeholders. I have a
    background in the intersection between development and design, but most of
    my career has gravitated towards frontend development and the JavaScript
    ecosystem.
  </Paragraph>
</Section>
