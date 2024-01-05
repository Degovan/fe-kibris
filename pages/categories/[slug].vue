<script setup>
import axios from 'axios';
import PopularImage from '~/components/Home/PopularImage.vue';
import('~/assets/cutom.css')

const apiUrl = useRuntimeConfig().public.apiUrl;
const slug = useRoute().params.slug

let contentPage = 1
let isLastContent = ref(true)

const contents = ref([])
const { data: category } =  useAsyncData('category', async () => {
    try {
        const response = await axios.get(`${apiUrl}/categories/${slug}`)

        loadContents(response.data.data.id)
        return response.data.data;
    } catch(err) {
        return null
    }
})

const loadMoreContents = async () => {
    const lastPage = await loadContents(category.value.id, ++contentPage)
    isLastContent.value = lastPage === contentPage
}

async function loadContents(id, page = 1) {
    const response = await axios.get(`${apiUrl}/contents?category=${id}&page=${page}`)
    const data = response.data.data
    isLastContent = data.pagination.lastPage == contentPage

    contents.value.push(...data.contents)
    return data.pagination.lastPage
}
</script>
<template>
    <div>
        <div class="container" style="margin-top: 100px">
            <h3 class="mb-4">Konten dengan kategori: {{ category?.name }}</h3>

            <div class="row">
                <div class="col-md-4 mt-4" v-if="contents" v-for="content in contents" :key="content.id">
                    <PopularImage :content="content"/>
                </div>
            </div>
            <div class="row mt-4">
                <div class="col-12 text-center">
                    <button v-show="!isLastContent" @click="loadMoreContents" class="btn btn-primary">Tampilkan Sisanya</button>
                </div>
            </div>
        </div>
    </div>
</template>
