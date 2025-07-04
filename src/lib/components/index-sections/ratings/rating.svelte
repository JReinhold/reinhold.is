<script lang="ts">
  import type { Component } from "svelte";
  import RoundStarIcon from "virtual:icons/ic/round-star";
  import RoundStarHalfIcon from "virtual:icons/ic/round-star-half";
  import RoundStarOutlineIcon from "virtual:icons/ic/round-star-outline";

  type Props = {
    text: string;
    amount: number;
    max?: number;
    IconFilled?: Component;
    IconHalf?: Component;
    IconEmpty?: Component;
    misalign?: boolean;
  };

  const {
    text,
    amount,
    max = 5,
    IconFilled = RoundStarIcon as unknown as Component,
    IconHalf = RoundStarHalfIcon as unknown as Component,
    IconEmpty = RoundStarOutlineIcon as unknown as Component,
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
  {#each filledStars as _ (_)}
    <IconFilled />
  {/each}
  <!-- eslint-disable-next-line @typescript-eslint/no-unused-vars -->
  {#each halfStars as _ (_)}
    <IconHalf />
  {/each}
  <!-- eslint-disable-next-line @typescript-eslint/no-unused-vars -->
  {#each emptyStars as _ (_)}
    <IconEmpty />
  {/each}
</div>

<style>
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

  :global(.stars > svg) {
    width: var(--size-6);
  }
</style>
