<script lang="ts">
  import type { Component } from "svelte";
  import RoundStarIcon from "virtual:icons/ic/round-star";
  import RoundStarHalfIcon from "virtual:icons/ic/round-star-half";
  import RoundStarOutlineIcon from "virtual:icons/ic/round-star-outline";

  type Props = {
    text: string;
    amount: number;
    max?: number;
    iconFilled?: Component;
    iconHalf?: Component;
    iconEmpty?: Component;
    misalign?: boolean;
  };

  const {
    text,
    amount,
    max = 5,
    iconFilled = RoundStarIcon as unknown as Component,
    iconHalf = RoundStarHalfIcon as unknown as Component,
    iconEmpty = RoundStarOutlineIcon as unknown as Component,
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
    <svelte:component this={iconFilled} />
  {/each}
  <!-- eslint-disable-next-line @typescript-eslint/no-unused-vars -->
  {#each halfStars as _}
    <svelte:component this={iconHalf} />
  {/each}
  <!-- eslint-disable-next-line @typescript-eslint/no-unused-vars -->
  {#each emptyStars as _}
    <svelte:component this={iconEmpty} />
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
