<template lang="">
    <div>
      <nav class="navbar fixed-top navbar-expand-lg bg-body-tertiary">
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
                  <NuxtLink to="/" class="nav-link active" aria-current="page"> Home </NuxtLink>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Jelajahi
                  </a>
                  <ul class="dropdown-menu">
                    <li v-for="category in categories" :key="category.id">
                        <NuxtLink :href="'/categories/' + category.slug" class="dropdown-item">{{ category.name }}</NuxtLink>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
</template>

<script setup>
    import axios from 'axios';

    const apiUrl = useRuntimeConfig().public.apiUrl;
    const { data: categories } = useAsyncData('categories', async () => {
        try {
            const response = await axios.get(`${apiUrl}/categories`)
            return response.data.data.categories;
        } catch(error) {
            return [];
        }
    })
</script>
