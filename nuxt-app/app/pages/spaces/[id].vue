<script setup>
const route = useRoute();
const { id } = route.params;
</script>
<template>
  <div class="flex flex-col items-center">
    <h1 class="my-12 text-6xl font-semibold text-gray-800">space/[id].vue</h1>
    <div class="flex gap-4">
      <NuxtLink :to="`/spaces/${id}`">首頁</NuxtLink>
      <NuxtLink :to="`/spaces/${id}/image`">前往images</NuxtLink>
      <NuxtLink :to="`/spaces/${id}/video`">前往videos</NuxtLink>
    </div>
    <div class="mt-4 w-full px-6">
      <div class="border-t-2 border-gray-200"></div>
    </div>
    <div class="flex w-full justify-center">
      <NuxtPage></NuxtPage>
    </div>
  </div>
</template>
