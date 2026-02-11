<script setup>
const enableCustomLayout = () => {
  setPageLayout('custom');
};
</script>
<template>
  <div class="flex flex-col items-center">
    <h1 class="my-12 text-6xl font-semibold text-gray-800">聯絡我們</h1>
    <p>123456789@gmail.com</p>
    <button
      class="mt-8 rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-800"
      @click="enableCustomLayout"
    >
      更新布局
    </button>
  </div>
</template>
