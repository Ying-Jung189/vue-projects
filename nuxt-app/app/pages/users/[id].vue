<script setup>
const route = useRoute();
const { id } = route.params;
</script>
<template>
  <div class="flex flex-col items-center">
    <h1 class="my-12 text-6xl font-semibold text-gray-800">動態路由頁面</h1>
    <p class="my-4 text-3xl text-gray-500">
      匹配到的id: <span class="text-5xl font-semibold">{{ id }}</span>
    </p>
  </div>
</template>
