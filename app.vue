<script setup lang="ts">
  const layout = "default";
</script>

<template>
    <div>
      <NuxtLoadingIndicator/>
       <NuxtLayout :layout="layout">
        <NuxtPage/>
      </NuxtLayout>
    </div>
</template>
