<script lang="ts">
  import Icon from "../../static-icon.svelte";

  export let text: string;
  export let amount: number;
  export let max = 5;
  export let iconFilled = "ic:round-star";
  export let iconHalf = "ic:round-star-half";
  export let iconEmpty = "ic:round-star-outline";
  export let misalign = false;

  const filledStars = Array.from({ length: Math.floor(amount) });
  const halfStars = Array.from({ length: (amount / 0.5) % 2 });
  const emptyStars = Array.from({ length: Math.floor(max - amount) });
</script>

<span class="text">{text}</span>
<div
  class={`stars ${misalign ? "misaligned" : ""}`}
  role="img"
  aria-label={`${amount} out of ${max} stars`}
>
  {#each filledStars as _}
    <Icon name={iconFilled} />
  {/each}
  {#each halfStars as _}
    <Icon name={iconHalf} />
  {/each}
  {#each emptyStars as _}
    <Icon name={iconEmpty} />
  {/each}
</div>

<style lang="postcss">
  .text {
    justify-self: end;
    text-align: end;
  }

  .stars {
    display: flex;
    flex-direction: row;
  }

  .misaligned {
    margin-left: -1rem;
  }
</style>
