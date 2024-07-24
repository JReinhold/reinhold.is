<script lang="ts">
  import Icon from "../../static-icon.svelte";

  type Props = {
    text: string;
    amount: number;
    max?: number;
    iconFilled?: string;
    iconHalf?: string;
    iconEmpty?: string;
    misalign?: boolean;
  };

  const {
    text,
    amount,
    max = 5,
    iconFilled = "ic:round-star",
    iconHalf = "ic:round-star-half",
    iconEmpty = "ic:round-star-outline",
    misalign = false,
  }: Props = $props();

  const filledStars = $derived(Array.from({ length: Math.floor(amount) }));
  const halfStars = $derived(Array.from({ length: (amount / 0.5) % 2 }));
  const emptyStars = $derived(Array.from({ length: Math.floor(max - amount) }));
</script>

<span class="text">{text}</span>
<div
  class={`stars ${misalign ? "misaligned" : ""}`}
  role="img"
  aria-label={`${amount} out of ${max} stars`}
>
  <!-- eslint-disable-next-line @typescript-eslint/no-unused-vars -->
  {#each filledStars as _}
    <Icon name={iconFilled} />
  {/each}
  <!-- eslint-disable-next-line @typescript-eslint/no-unused-vars -->
  {#each halfStars as _}
    <Icon name={iconHalf} />
  {/each}
  <!-- eslint-disable-next-line @typescript-eslint/no-unused-vars -->
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
