<script>
  import Navbar from "./navbar.svelte";

  let images = [
    {
      src: "https://centroscomercialespradera.com/wp-content/uploads/2023/03/cropped-logo-sq.png",
      alt: "Pradera",
    },
    { src: "https://via.placeholder.com/300x200", alt: "Madero" },
    {
      src: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhMPkfbRlvXMrxzjlm64nCYMC5o6yuzKF755zYPe6BxzqX-sPYvRChA-LB-XERgbamAldSUzpbpdg2KqBj4oZnXU9RFa7Q88NLg6Pi-JfIBdyRWrP3FUoD4R3eZO2mu8Fr15uB1dp1jDz4/w1200-h630-p-k-no-nu/Logotipo+Eskala+Roosevelt+JPG.jpg",
      alt: "Eskala",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3_3KJ30bFTeWR7-_Hl47GlHEoWqI7AY3pug&s",
      alt: "Okland",
    },
    { src: "https://via.placeholder.com/300x200", alt: "Image 5" },
    { src: "https://via.placeholder.com/300x200", alt: "Image 6" },
    { src: "https://via.placeholder.com/300x200", alt: "Image 7" },
    { src: "https://via.placeholder.com/300x200", alt: "Image 8" },
    { src: "https://via.placeholder.com/300x200", alt: "Image 9" },
  ];
</script>

<div class="margin">
  <Navbar />
</div>

<div class="gallery">
  {#each images as { src, alt }}
    <div class="gallery-item">
      <img {src} {alt} />
    </div>
  {/each}
</div>

<style>
  .margin {
    margin-top: 80px;
  }

  .gallery {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
    margin: 20px;
    justify-items: center;
  }

  .gallery-item {
    display: block;
    width: 70%;
    height: 200px;
    overflow: hidden;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    position: relative;
  }

  .gallery-item img {
    width: 100%;
    height: 100%;
    object-fit: fill;
    transition: transform 0.3s ease-in-out;
    margin-right: -4px;
  }

  .gallery-item img:hover {
    transform: scale(1.05);
  }

  @media (max-width: 600px) {
    .gallery {
      grid-template-columns: 1fr;
    }
  }
</style>
