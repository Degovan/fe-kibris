<template lang="">
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Navbar scroll</a>
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
                    Link
                  </a>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Action</a></li>
                    <li><a class="dropdown-item" href="#">Another action</a></li>
                    <li><hr class="dropdown-divider"></li>
                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <div class="section-populer-image">
        <div class="container">
          <h1 class="text-center px-3 py-3">Gambar Populer</h1>
          <div class="row">
            <div class="col-lg-3">
              <div class="card">
                <img src="..." class="card-img-top" alt="...">
                <div class="card-body">
                  <div class="d-flex justify-content-between">
                    <h5 class="card-title">Special title treatment</h5>
                    <button class="btn btn-primary btn-sm">Link</button>
                  </div>
                  <a href="#" class="card-text link-underline link-underline-opacity-0">Lihat lebih detail ></a>
                </div>
              </div>
            </div>
            <div class="col-lg-3">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Special title treatment</h5>
                  <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>
            <div class="col-lg-3">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Special title treatment</h5>
                  <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>
            <div class="col-lg-3">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Special title treatment</h5>
                  <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
      <section class="section-advantages-kibris mt-5">
        <div class="container">
          <h1 class="text-center px-3 py-3">Kelebihan menggunakan kibrisPDR</h1>
          <div class="row">
            <div class="col-lg-4">
              <div class="card">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus delectus in debitis laboriosam, dolorum natus unde quasi nemo deleniti eveniet commodi! Temporibus optio reiciendis quaerat iusto, magni numquam ducimus perferendis?</p>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="card">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus delectus in debitis laboriosam, dolorum natus unde quasi nemo deleniti eveniet commodi! Temporibus optio reiciendis quaerat iusto, magni numquam ducimus perferendis?</p>
              </div>
            </div><div class="col-lg-4">
              <div class="card">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus delectus in debitis laboriosam, dolorum natus unde quasi nemo deleniti eveniet commodi! Temporibus optio reiciendis quaerat iusto, magni numquam ducimus perferendis?</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer class="mt-5 p-3 mb-2 bg-primary-subtle text-emphasis-primary h-100">
        <div class="container">
          <div class="row">
            <div class="col">
              <h3>Pages</h3>
              <ul>
                <li>Blog</li>
                <li>Tentang Kami</li>
                <li>Kebijakan Situs</li>
                <li>Syarat Ketentuan</li>
                <li>Penafian Situs</li>
                <li>Lisensi</li>
                <li>Copyright</li>
                <li>Hubungi Kami</li>
              </ul>
            </div>
            <div class="col">
              <h3>Tag Populer</h3>
              <ul>
                <li>Pemandangan</li>
                <li>Contoh Surat</li>
                <li>Desain Rumah</li>
                <li>Kartun</li>
                <li>Ilustrasi</li>
                <li>Gambar Lucu</li>
              </ul>
            </div>
                <div class="col">
                  <h3>Foto Populer</h3>
                  <ul>
                    <li>Artis</li>
                    <li>Cantik</li>
                    <li>Wanita</li>
                    <li>Prewedding</li>
                    <li>Hantu</li>
                    <li>Cute</li>
                  </ul>
            </div>
                <div class="col">
                  <h3>Newsletter</h3>
                  <p>Signup for our newsletter to get the latest news in your inbox.</p>
                  <input type="email" class="form-control" placeholder="Enter your email" >
                  <small>Your email is safe with us. We don't spam.</small>
            </div>
          </div>  
        </div>
      </footer>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    
</style>