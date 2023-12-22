<template>
    <div class="hover hover-4 text-white rounded"><img :src="content.thumbnail" alt="">
        <div class="hover-overlay"></div>
        <div class="hover-4-content">
            <h3 class="hover-4-title text-uppercase font-weight-bold mb-0"><span class="font-weight-light">{{ content.title }}</span></h3>
            <p class="hover-4-description text-uppercase mb-0 small">Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt</p>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['content'],
    }
</script>
