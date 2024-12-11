<script>
  import Navbar from "../../../components/navbar.svelte";

  let questions = [
    { id: 1, text: `Entretenimiento` },
    { id: 2, text: `Belleza` },
    {
      id: 3,
      text: `Alimentación`,
    },
  ];

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
      image: "https://via.placeholder.com/150",
      labels: ["Tienda X", "Cantidad de personas: 0", "Estado: Vacío"],
    },
    {
      image: "https://via.placeholder.com/150",
      labels: ["Tienda X", "Cantidad de personas: 0", "Estado: Vacío"],
    },
    {
      image: "https://via.placeholder.com/150",
      labels: ["Tienda X", "Cantidad de personas: 0", "Estado: Vacío"],
    },
    {
      image: "https://via.placeholder.com/150",
      labels: ["Tienda X", "Cantidad de personas: 0", "Estado: Vacío"],
    },
    {
      image: "https://via.placeholder.com/150",
      labels: ["Tienda X", "Cantidad de personas: 0", "Estado: Vacío"],
    },
    {
      image: "https://via.placeholder.com/150",
      labels: ["Tienda X", "Cantidad de personas: 0", "Estado: Vacío"],
    },
    {
      image: "https://via.placeholder.com/150",
      labels: ["Tienda X", "Cantidad de personas: 0", "Estado: Vacío"],
    },
    {
      image: "https://via.placeholder.com/150",
      labels: ["Tienda X", "Cantidad de personas: 0", "Estado: Vacío"],
    },
    {
      image: "https://via.placeholder.com/150",
      labels: ["Tienda X", "Cantidad de personas: 0", "Estado: Vacío"],
    },
  ];
</script>

<div class="header">
  <a href="/">
    <Navbar />
  </a>
</div>

<div class="filter">
  <form onsubmit={handleSubmit}>
    <select class="" {selected} onchange={() => (answer = "")}>
      {#each questions as question}
        <option value={question}>
          {question.text}
        </option>
      {/each}
    </select>

    <button disabled={!answer} type="submit"> Submit </button>
  </form>
</div>

<div class="grid">
  {#each items as item}
    <div class="grid-item">
      <img src={item.image} alt="local" />
      <div class="labels">
        {#each item.labels as label}
          <div class="label">{label}</div>
        {/each}
      </div>
    </div>
  {/each}
</div>

<style>
  .filter {
    display: flex;
    justify-content: center;
    justify-items: center;
    margin-bottom: 50px;
  }

  .filter select {
    font-size: 20px;
    padding: 10px;
    height: 40px;
    width: 200px;
    border-radius: 5px;
  }

  .filter button {
    font-size: 20px;
    margin-left: 10px;
    padding: 7px;
    border-radius: 20px;
    background-color: rgba(67, 39, 245, 1);
    color: aliceblue;
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
    justify-content: flex-start; /* Align content to the left */
    align-items: center;
    gap: 10px;
    height: 100%; /* Ensure grid items stretch vertically */
  }

  .grid-item img {
    width: 150px;
    height: 150px;
    object-fit: cover;
  }

  .labels {
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: center; 
    text-align: left; /* Align labels text to the left */
  }

  .label {
    font-size: 14px;
    font-weight: bold;
  }

  .header {
    margin-top: 120px;
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
