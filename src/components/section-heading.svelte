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
    font-weight: var(--font-weight-8);
    padding-bottom: var(--size-2);
  }
  subtitle {
    color: hsl(var(--text-2-hsl) / 70%);
  }
</style>
