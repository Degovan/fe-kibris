<template>
    <div>
      <nav class="navbar fixed-top navbar-expand-lg" :class="{ 'navbar-scrolled': scrolled }">
        <div class="container">
          <NuxtLink to="/" class="navbar-brand">
            <img src="/halal.jpeg" alt="" width="5%">
          </NuxtLink>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="d-flex">
            <div class="collapse navbar-collapse" id="navbarScroll">
              <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style="--bs-scroll-height: 100px;">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Jelajahi
                  </a>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Foto</a></li>
                    <li><a class="dropdown-item" href="#">Walpaper</a></li>
                    <li><a class="dropdown-item" href="#">Background</a></li>
                    <li><a class="dropdown-item" href="#">Animasi</a></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
</template>


<style>
  .navbar {
    transition: background-color 0.5s ease-in-out;
  }

  .navbar-scrolled {
    background-color: #ffffff; 
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); 
  }
</style>

<script>
export default {
  data() {
    return {
      scrolled: false,
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.scrolled = window.scrollY > 50; // Ganti nilai ini sesuai dengan tinggi yang diinginkan sebelum navbar berubah
    },
  },
};
</script>
