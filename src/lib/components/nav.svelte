<script lang="ts">
  import { page } from "$app/state";
  import Link from "./atoms/link.svelte";
  import Section from "./atoms/section.svelte";
  import Emoji from "./emoji.svelte";

  let readingMode = $state(page.data.readingMode ?? false);
</script>

<Section element="nav" id="nav-container">
  <div class="nav">
    {#if page.url.pathname !== "/"}
      <div class="sized-container">
        <Link href="/" class="back-link"
          >👈 <span class="long-label">Back to</span> Home</Link
        >
      </div>
    {/if}
    <div class="sized-container">
      <label class="reading-mode">
        <input
          name="reading-mode"
          type="checkbox"
          bind:checked={readingMode}
          hidden
          onchange={(event) => {
            fetch("/api/reading-mode", {
              method: "POST",
              body: JSON.stringify({
                readingMode: event.currentTarget.checked,
              }),
            });
          }}
        />
        <span
          ><span class="long-label">Switch to</span>{readingMode
            ? " Fancy"
            : " Reading"} Mode <Emoji class="emoji"
            >{readingMode
              ? page.data.theme.mode === "light"
                ? "🕶️"
                : "👓"
              : "🎩"}</Emoji
          ></span
        >
      </label>
    </div>
  </div>
</Section>

<svelte:head>
  {@html `<style>
    :root {
      @supports (backdrop-filter: blur(30px)) {
        --section-background-opacity: ${readingMode ? "100%" : "60%"};
        --section-background-blur: ${readingMode ? "initial" : "30px"};
      }

      /* stronger background color when backdrop cannot be blurred */
      @supports not (backdrop-filter: blur(30px)) {
        --section-background-opacity: ${readingMode ? "100%" : "60%"};
      }
    }
  </style>
  `}
</svelte:head>

<style>
  :global(#nav-container) {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    padding: var(--size-1);
  }

  .nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: var(--size-1);
    gap: var(--size-2);
    font-size: var(--font-size-3);
    margin-top: -10px;
  }

  .sized-container {
    container-type: inline-size;
    display: flex;
    align-items: center;
    width: 100%;
  }

  .reading-mode {
    margin-left: auto;
    display: flex;
    align-items: center;
    gap: var(--size-2);
    user-select: none;
  }

  @container (max-width: 12em) {
    .long-label {
      display: none;
    }
  }
</style>
