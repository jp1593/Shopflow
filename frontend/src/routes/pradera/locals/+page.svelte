<script>
    import Navbar from "../../../components/navbar.svelte";
  
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
  