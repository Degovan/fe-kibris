<template>
    <div class="card">
    <div class="card-image-populer">
        <img :src="content.thumbnail" alt="" class="card-img-top">
         <div class="info">
            <h4>{{ content.title }}</h4>
            
            <p class="mt-4"> <b>Share </b>
                <ul>
                    <li>Facebook</li>
                    <li>Twitter</li>
                </ul>
            </p>
        </div>
    </div>
    </div>
    
</template>

<script>
    export default {
        props: ['content'],
    }
</script>
