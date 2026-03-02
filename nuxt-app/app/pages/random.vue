<script setup>
const number = useState('number', () => Math.floor(Math.random() * 1000));
</script>
<template>
  <div class="flex flex-col item-center">
    <span class="my-8 text-4xl text-gray-700">{{ number }}</span>
  </div>
</template>
