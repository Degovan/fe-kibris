<script setup lang="ts">
  const layout = "default";
</script>

<template>
    <div>
       <NuxtLayout :layout="layout">
        <NuxtLoadingIndicator/>
        <NuxtPage/>
      </NuxtLayout>
    </div>
</template>