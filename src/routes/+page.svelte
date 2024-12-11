<script>
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";
  import LandingPage from "../components/landing-page.svelte";

  let showHomeScreen = true;
  let showLandingPage = false;

  onMount(() => {
    const timer = setTimeout(() => {
      showHomeScreen = false;
      showLandingPage = true;
    }, 2000);

    return () => clearTimeout(timer);
  });
</script>

{#if showHomeScreen}
  <div class="preview" transition:fade></div>
{:else if showLandingPage}
  <div>
    <LandingPage />
  </div>
{/if}

<style>
  .preview {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    position: fixed;
    top: 0;
    left: 0;
    background-image: url("../assets/ShopFlow.jpeg");
    background-size: cover;
    background-position: center;
  }
</style>
