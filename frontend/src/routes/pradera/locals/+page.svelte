<script>
  import { onMount } from "svelte";
  import Navbar from "../../../components/navbar.svelte";
  import Albacinema from "../../../assets/Albacinema_Logo.png";
  import Max from "../../../assets/NeIpPcwC_400x400.jpg";
  import Burger from "../../../assets/Burger_King_2020.svg.png";

  // 🔹 Helper que asigna estado según cantidad
  function getEstado(cantidad) {
    if (cantidad >= 1 && cantidad <= 15) return "Vacío";
    if (cantidad >= 16 && cantidad <= 30) return "Moderado";
    if (cantidad >= 31) return "Saturado";
    return "Vacío"; // fallback cuando es 0
  }

  // 🔹 Items iniciales
  let items = [
    { image: Albacinema, name: "Albacinema", cantidad: 0, estado: "Vacío" },
    { image: Max, name: "Max", cantidad: 20, estado: getEstado(20) },
    { image: Burger, name: "Burger King", cantidad: 42, estado: getEstado(42) },
  ];

  // 🔹 Filtros
  let search = "";
  let estadoFilter = "Todos";

  // 🔹 Reactive filtered items
  $: filteredItems = items.filter((item) => {
    const matchesName = item.name.toLowerCase().includes(search.toLowerCase());
    const matchesEstado =
      estadoFilter === "Todos" ||
      item.estado.toLowerCase().includes(estadoFilter.toLowerCase());
    return matchesName && matchesEstado;
  });

  // 🔹 Estado color helper
  function estadoColor(estado) {
    if (estado.toLowerCase() === "vacío") return "green";
    if (estado.toLowerCase() === "moderado") return "orange";
    if (estado.toLowerCase() === "saturado") return "red";
    return "black";
  }

  // 🔹 Fetch Albacinema person count
  async function fetchAlbacinemaCantidad() {
    try {
      const res = await fetch("http://localhost:5000/detect");
      const data = await res.json();
      const cantidad = data.people_detected || 0;

      const albacinema = items.find((i) => i.name === "Albacinema");
      if (albacinema) {
        albacinema.cantidad = cantidad;
        albacinema.estado = getEstado(cantidad);

        // 🔹 Reasignamos para disparar reactividad
        items = [...items];
      }
    } catch (err) {
      console.error("Error fetching Albacinema data:", err);
    }
  }

  // 🔹 Call fetch on page load
  onMount(() => {
    fetchAlbacinemaCantidad();
  });
</script>

<div class="header">
  <a href="/">
    <Navbar />
  </a>
</div>

<!-- Search and Estado filter -->
<div class="search-filter">
  <input type="text" placeholder="Buscar local..." bind:value={search} />
  <select bind:value={estadoFilter}>
    <option value="Todos">Todos</option>
    <option value="Vacío">Vacío</option>
    <option value="Moderado">Moderado</option>
    <option value="Saturado">Saturado</option>
  </select>
</div>

<div class="grid">
  {#each filteredItems as item}
    <div class="grid-item">
      <img src={item.image} alt={item.name} />
      <div class="labels">
        <div class="label name">{item.name}</div>
        <div class="label grey">Cantidad de personas: {item.cantidad}</div>
        <div class="label estado" style="color: {estadoColor(item.estado)}">
          Estado: {item.estado}
        </div>
      </div>
    </div>
  {/each}
</div>

<style>
  .search-filter {
    display: flex;
    justify-content: center;
    gap: 15px;
    margin: 20px 0;
  }

  .search-filter input {
    padding: 8px;
    font-size: 16px;
    width: 250px;
    border-radius: 5px;
    border: 1px solid #ccc;
  }

  .search-filter select {
    padding: 8px;
    font-size: 16px;
    border-radius: 5px;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    justify-items: center;
    align-items: center;
  }

  .grid-item {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 15px;
    height: 100%;
  }

  .grid-item img {
    width: 120px;
    height: 120px;
    object-fit: contain;
  }

  .labels {
    display: flex;
    flex-direction: column;
    gap: 6px;
    justify-content: center;
    text-align: left;
  }

  .label {
    font-size: 14px;
  }

  .label.name {
    font-weight: bold;
  }

  .label.grey {
    color: grey;
  }

  .label.estado {
    font-weight: bold;
  }

  .header {
    margin-top: 80px;
  }

  @media (max-width: 1024px) {
    .grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 600px) {
    .grid {
      grid-template-columns: 1fr;
    }
  }
</style>
