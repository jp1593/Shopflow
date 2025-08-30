<script>
  import Navbar from "../../../components/navbar.svelte";
  import Albacinema from "../../../assets/Albacinema_Logo.png";
  import Max from "../../../assets/NeIpPcwC_400x400.jpg";
  import Burger from "../../../assets/Burger_King_2020.svg.png";

  let selected = $state();
  let answer = $state("");

  function handleSubmit(event) {
    event.preventDefault();
    alert(
      `answered question ${selected.id} (${selected.text}) with "${answer}"`
    );
  }

  const items = [
    {
      image: Albacinema,
      name: "Albacinema",
      cantidad: 0,
      estado: "Vacío",
    },
    {
      image: Max,
      name: "Max",
      cantidad: 0,
      estado: "Moderado",
    },
    {
      image: Burger,
      name: "Burger King",
      cantidad: 0,
      estado: "Saturado",
    },
  ];

  let search = $state("");
  let estadoFilter = $state("Todos");

  // 🔹 Derived filtered items
  const filteredItems = $derived(
    items.filter((item) => {
      const name = item.name.toLowerCase();
      const estado = item.estado.toLowerCase();

      const matchesName = name.includes(search.toLowerCase());
      const matchesEstado =
        estadoFilter === "Todos" ||
        estado.includes(estadoFilter.toLowerCase());

      return matchesName && matchesEstado;
    })
  );

  // 🔹 Helper: return estado color
  function estadoColor(estado) {
    if (estado.toLowerCase().includes("vacío")) return "green";
    if (estado.toLowerCase().includes("moderado")) return "orange";
    if (estado.toLowerCase().includes("saturado")) return "red";
    return "black";
  }
</script>

<div class="header">
  <a href="/">
    <Navbar />
  </a>
</div>

<!-- 🔹 Search and Estado filter UI -->
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
        <div class="label grey">
          Cantidad de personas: {item.cantidad}
        </div>
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
    margin: 20px 0; /* 🔹 less top space */
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
    color: grey; /* 🔹 cantidad de personas */
  }

  .label.estado {
    font-weight: bold;
  }

  .header {
    margin-top: 80px; /* 🔹 less space above */
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