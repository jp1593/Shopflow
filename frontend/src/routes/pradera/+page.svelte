<script>
  import Navbar from "../../components/navbar.svelte";

  let location = [
    {
      label: "Pradera Concepción",
      route: "/pradera-concepcion",
    },
    {
      label: "Xela",
      route: "/xela",
    },
    {
      label: "Chiquimula",
      route: "/chiquimula",
    },
    {
      label: "Escuintla",
      route: "/escuintla",
    },
    {
      label: "Huehuetenango",
      route: "/huehuetenango",
    },
    {
      label: "Puerto Barrios",
      route: "/puerto-barrios",
    },
    {
      label: "Zacapa",
      route: "/zacapa",
    },
    {
      label: "Chiquimula",
      route: "/chiquimula",
    },
  ];
</script>

<div class="header">
  <a href="/">
    <Navbar />
  </a>
</div>

<div class="locations-list">
  {#each location as { label, route }}
    <div class="location-item">
      <a href={route || "#"}>
        <p>{label}</p>
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
    justify-content: center;
    align-items: center;
    width: 70%;
    height: 150px;
    overflow: hidden;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 30, 0.1);
    position: relative;
    background-color: rgba(67, 39, 245, 1);
  }

  .location-item a {
    text-decoration: none;
    color: #333;
  }

  .location-item p {
    font-size: 24px;
    font-weight: bold;
    text-align: center;
    color: #ffffff;
    margin: 0;
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
