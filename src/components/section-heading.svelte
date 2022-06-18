<div>
  <subtitle> reinhold.is </subtitle>
  <h2>
    <slot />
  </h2>
</div>

<style>
  div {
    display: flex;
    flex-direction: column;
    font-family: var(--font-mono);
    padding-bottom: var(--size-2);
  }
  subtitle {
    color: hsl(var(--gray-9-hsl) / 70%);
  }
</style>
