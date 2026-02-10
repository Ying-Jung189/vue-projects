<script setup>
if (import.meta.server) {
  const event = useRequestEvent();
  setResponseStatus(event, 404);
}
</script>
<template>
  <div class="flex flex-col items-center">
    <h1 class="my-12 text-6xl font-semibold text-gray-800">404</h1>
    <p class="text-4xl text-gray-800">Not found</p>
    <p class="my-6 text-xl text-gray-800">找不到此頁面</p>
  </div>
</template>
