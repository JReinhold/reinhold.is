<script>
  import SectionHeading from '../../section-heading.svelte';
  import Long from './long.svelte';
  import Short from './short.svelte';
  let isShortText = true;
  $: toggleText = isShortText ? 'quick' : 'longer';
  $: Content = isShortText ? Short : Long;
  const toggle = () => {
    isShortText = !isShortText;
  };
</script>

<section id="doing-a-quick-intro">
  <SectionHeading>
    🙋‍♂️/doing-a-<button on:click="{toggle}">{toggleText}</button>-intro
  </SectionHeading>
  <svelte:component this="{Content}" />
</section>

<style>
  button {
    font-size: var(--font-size-fluid-2);
    background: transparent;
    color: var(--link);
    padding: 0;
  }
  button:hover {
    text-decoration: underline;
  }
</style>
