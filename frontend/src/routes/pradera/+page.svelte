<script>
  import { onMount } from "svelte";
  import Navbar from "../../components/navbar.svelte";

  let location = [
    {
      label: "Pradera Concepción",
      route: "/pradera/locals",
      showTotal: true
    },
    { label: "Xela", route: "/xela", cantidad: 200 },
    { label: "Chiquimula", route: "/chiquimula", cantidad: 350 },
    { label: "Escuintla", route: "/escuintla", cantidad: 120 },
    { label: "Huehuetenango", route: "/huehuetenango", cantidad: 1000 },
    { label: "Puerto Barrios", route: "/puerto-barrios", cantidad: 450 },
    { label: "Zacapa", route: "/zacapa", cantidad: 275 },
  ];

  // 🔹 Valores iniciales (Pradera locales)
  let albacinemaCantidad = 0;
  const maxCantidad = 20;
  const burgerCantidad = 42;

  // 🔹 Total dinámico para Pradera
  $: totalPersonasPradera = albacinemaCantidad + maxCantidad + burgerCantidad;

  // 🔹 Fetch solo para Albacinema
  async function fetchAlbacinemaCantidad() {
    try {
      const res = await fetch("http://localhost:5000/detect");
      const data = await res.json();
      albacinemaCantidad = data.people_detected || 0;
    } catch (err) {
      console.error("Error fetching Albacinema data:", err);
    }
  }

  onMount(() => {
    fetchAlbacinemaCantidad();
    const interval = setInterval(fetchAlbacinemaCantidad, 3 * 60 * 1000);
    return () => clearInterval(interval);
  });
</script>

<div class="header">
  <a href="/">
    <Navbar />
  </a>
</div>

<div class="locations-list">
  {#each location as { label, route, showTotal, cantidad }}
    <div class="location-item">
      <a href={route || "#"}>
        <p>{label}</p>

        {#if showTotal}
          <p class="total">
            Cantidad total de personas: {totalPersonasPradera}
          </p>
        {:else}
          <p class="total">
            Cantidad total de personas: {cantidad}
          </p>
        {/if}
      </a>
    </div>
  {/each}
</div>

<style>
  .header {
    margin-top: 120px;
  }

  .locations-list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    margin: 20px;
    justify-items: center;
  }

  .location-item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 70%;
    height: 150px;
    overflow: hidden;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 30, 0.1);
    position: relative;
    background-color: rgba(67, 39, 245, 1);
    text-align: center;
  }

  .location-item a {
    text-decoration: none;
    color: #fff;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .location-item p {
    font-size: 20px;
    font-weight: bold;
    margin: 5px 0;
  }

  .location-item .total {
    font-size: 16px;
    font-weight: normal;
    color: #e0e0e0;
  }

  @media (max-width: 600px) {
    .locations-list {
      grid-template-columns: 1fr;
    }

    .location-item {
      width: 90%;
      height: 120px;
    }
  }
</style>
