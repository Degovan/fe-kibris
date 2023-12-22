<script setup>
  import('~/assets/cutom.css')

  const { data: picture } = await useFetch('https://kibrispdrclone.websitesekolah.net/api/contents');


</script>
<template>
  <div>
      <Hero/>
      <section class="section-populer-image">
        <div class="container">
          <h2 class="text-center px-3 py-3">Gambar Populer</h2>
          <div class="small-border"></div>
          <div class="row">
            <div class="col-lg-3" v-for="item in picture" :key="item.id">
            <div class="hover hover-4 text-white rounded"><img src="https://bootstrapious.com/i/snippets/sn-img-hover/hoverSet-7.jpg" alt="">
              <div class="hover-overlay"></div>
              <div class="hover-4-content">
                <h3 class="hover-4-title text-uppercase font-weight-bold mb-0"><span class="font-weight-light">Image </span>Caption</h3>
                <p class="hover-4-description text-uppercase mb-0 small">Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt</p>
              </div>
            </div>
             
              <!-- <div class="card">
                <img src="/halal.jpeg" class="card-img-top" alt="images">
                <div class="card-body d-block d-flex justify-content-between">
                  <h3 class="fs-5"> {{ item.data }} </h3>
                  <div class="border-none btn btn-light btn-sm rounded-5 items-align-center" type="button"><i class="bi bi-eye"></i></div>
                </div>
                <div class="py-3 px-3">
                  <a href="#" class="text-start fw-normal text-decoration-none">Lihat Detail</a>
                </div>
              </div> -->
            </div>
          </div>
          <div class="d-flex justify-content-center align-items-center mt-5">
            <a href="#" class="btn btn-primary text-decoration-none">Lihat Semua</a>
          </div>
        </div>
      </section>

      <section class="section-advantages-kibris mt-5">
        <div class="container">
          <h2 class="text-center px-3 py-3">Kelebihan menggunakan kibrisPDR</h2>
          <div class="small-border"></div>
          <div class="row">
            <div class="col-lg-4 col-xl-4 col-sm-12">
              <div class="card border-0 feature-box bg-feature text-black" style="background-size: cover;">
                <div class="box-icon mb-3">
                  <Icon name="carbon:download" />
                </div>
                 <h4 class="mb-3 mt-0 fs-4">10 Juta++ Unduhan</h4>
                <p>Hingga saat ini lebih dari 10 juta gambar gratis yang di download.</p>
                <!-- <Icon name="carbon:download" class="icon-right"/> -->
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </div>
</template>