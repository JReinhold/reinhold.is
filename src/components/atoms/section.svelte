<section {...$$restProps}><slot /></section>

<style lang="postcss">
  section {
    display: flex;
    flex-direction: column;

    margin: 0 var(--size-fluid-1);
    padding: var(--size-fluid-2);
    gap: var(--size-1);

    border-radius: var(--radius-3);

    @supports (backdrop-filter: blur(30px)) {
      backdrop-filter: blur(30px);
      background: hsl(var(--surface-1-hsl) / 60%);
    }

    /* stronger background color when backdrop cannot be blurred */
    @supports not (backdrop-filter: blur(30px)) {
      background: hsl(var(--surface-1-hsl) / 90%);
    }
  }
</style>
