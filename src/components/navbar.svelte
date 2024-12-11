<script>
  let isOpen = false;

  const toggleMenu = () => {
    isOpen = !isOpen;
  };
</script>

<nav>
  <div class="navbar-container">
    <div class="logo">
      <div class="logo-text">ShopFlow</div>
    </div>

    <ul class="nav-links">
      <!-- <li><a href="#home">Home</a></li> -->
      <!-- <li><a href="#about">About</a></li> -->
      <!-- <li><a href="#services">Services</a></li> -->
      <!-- <li><a href="#contact">Contact</a></li> -->
    </ul>

    <div class="menu">
      <!-- <a href="#home">Home</a> -->
      <!-- <a href="#about">About</a> -->
      <!-- <a href="#services">Services</a> -->
      <a href="#contact">Contact</a>
    </div>
  </div>
</nav>

<style>
  nav {
    background-color: rgba(67, 39, 245, 1);
    padding: 16px 30px;
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 1000;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  .navbar-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    flex-wrap: wrap;
  }

  .logo {
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
  }

  .logo-text {
    font-size: 1.8rem;
    color: #fff;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 2px;
    cursor: pointer;
    transition: color 0.3s ease-in-out;
  }

  .logo:hover {
    color: #f4a261;
  }

  .nav-links {
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;
    gap: 20px;
  }

  .nav-links li {
    margin: 0;
  }

  .nav-links a {
    text-decoration: none;
    color: #fff;
    font-size: 1rem;
    font-weight: 500;
    padding: 8px 16px;
    border-radius: 5px;
    transition: background-color 0.3s ease-in-out;
  }

  .nav-links a:hover {
    background-color: #f4a261;
  }

  .menu {
    display: none;
    flex-direction: column;
    gap: 16px;
    position: absolute;
    top: 60px;
    right: 30px;
    background-color: #2b3e50;
    padding: 16px;
    border-radius: 8px;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  }

  @media (max-width: 768px) {
    .nav-links {
      display: none;
    }
  }
</style>
