<script>
  import Long from './long.svelte';
  import Short from './short.svelte';
  let isShortText = true;
  $: toggleText = isShortText ? 'short' : 'longer';
  $: Content = isShortText ? Short : Long;
  const toggle = () => {
    isShortText = !isShortText;
  };
</script>

<section>
  <h2>
    🙋‍♂️ A
    <button on:click="{toggle}">{toggleText}</button>
    bit about me
  </h2>
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
