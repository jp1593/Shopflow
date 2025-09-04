<script>
  import { onMount } from "svelte";
  import Navbar from "../../components/navbar.svelte";

  let location = [
    { label: "Pradera Concepción", route: "/pradera/locals", showTotal: true },
    { label: "Xela", route: "/xela", cantidad: 200 },
    { label: "Chiquimula", route: "/chiquimula", cantidad: 350 },
    { label: "Escuintla", route: "/escuintla", cantidad: 120 },
    { label: "Huehuetenango", route: "/huehuetenango", cantidad: 1000 },
    { label: "Puerto Barrios", route: "/puerto-barrios", cantidad: 450 },
    { label: "Zacapa", route: "/zacapa", cantidad: 275 },
  ];

  // Valores iniciales (Pradera locales)
  let albacinemaCantidad = 0;
  const maxCantidad = 20;
  const burgerCantidad = 42;

  // Total dinámico para Pradera
  $: totalPersonasPradera = albacinemaCantidad + maxCantidad + burgerCantidad;

  // Helper para estado y color
  function getEstadoColor(cantidad) {
    if (cantidad <= 500) return { estado: "Vacío", color: "rgb(50,205,50)" };
    if (cantidad <= 1500) return { estado: "Moderado", color: "yellow" };
    return { estado: "Saturado", color: "red" };
  }

  // Precompute the state for each location
  $: locationWithState = location.map(loc => {
    let cantidad = loc.showTotal ? totalPersonasPradera : loc.cantidad;
    let { estado, color } = getEstadoColor(cantidad);
    return { ...loc, cantidad, estado, color };
  });

  // Fetch solo para Albacinema
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
  {#each locationWithState as loc}
    <div class="location-item">
      <a href={loc.route || "#"}>
        <p>{loc.label}</p>
        <p class="total">
          Cantidad de personas: {loc.cantidad}
          <span class="state-circle" style="background-color: {loc.color}"></span>
        </p>
      </a>
    </div>
  {/each}
</div>

<style>
  .header { margin-top: 120px; }

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
    box-shadow: 0 4px 6px rgba(0,0,30,0.1);
    background-color: rgba(67,39,245,1);
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
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .location-item .total {
    font-size: 16px;
    font-weight: normal;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .state-circle {
    width: 14px;
    height: 14px;
    border-radius: 50%;
    display: inline-block;
  }

  @media (max-width: 600px) {
    .locations-list { grid-template-columns: 1fr; }
    .location-item { width: 90%; height: 120px; }
  }
</style>
