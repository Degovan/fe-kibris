<template lang="">
  <div>
    <section>
        <div class="container">
            <div class="row">
                <div class="col-lg-6 col-sm-12">
                    <img v-if="content" :src="content.pictures[0].url" class="img-thumbnail w-100" alt="...">
                </div>
                <div class="col-lg-6 col-sm-12">
                    <h3>{{ content?.title ?? '-' }}</h3>
                    <div class="d-flex justfy-content-start gap-2 py-2">
                        <button class="btn btn-primary">Gambar</button>
                        <button class="btn btn-primary">Gambar</button>
                        <button class="btn btn-primary">Gambar</button>
                    </div>
                    <p>
                        {{ content?.meta ?? '-' }}
                    </p>
                    <div class="mt-3">
                        <div class="card bg-primary p-2 text-white">
                            <div class="card-body">
                                <h4>Lisensi Gambar</h4>
                                <ul>
                                    <li>Gambar bebas untuk digunakan ulang.</li>
                                    <li>Bisa digunakan secara komersil dan non-komersil.</li>
                                    <li>Tidak diperlukan atribusi dan retribusi.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section>
        <div class="container">
            <h4 v-if="content">Koleksi</h4>
            <div class="row">
                <div v-if="content" v-for="(picture, index) in content.pictures" :key="picture.id" class="col-lg-3">
                    <div class="card">
                        <img :src="picture.url" class="card-img-top" alt="images">
                        <div class="card-body d-block d-flex justify-content-between">
                        <h3 class="fs-5">Koleksi Gambar No. {{ index + 1 }} </h3>
                        <div class="border-none btn btn-light btn-sm rounded-5 items-align-center" type="button"><i class="bi bi-eye"></i></div>
                        </div>
                        <div class="py-3 px-3">
                        <a href="#" class="text-start fw-normal text-decoration-none">Lihat Detail</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  </div>
</template>

<script setup>
import axios from 'axios'

const { data: content } = useAsyncData('content', async () => {
    try {
        const response = await axios.get(`http://localhost:8000/api/contents/${useRoute().params.id}`)
        return response.data.data.content;
    } catch(error) {
        return null;
    }
})
</script>
