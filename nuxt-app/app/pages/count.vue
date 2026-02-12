<script setup>
import useCounter from '~/composables/useCounter';

const { count, increment } = useCounter();
</script>
<template>
  <div class="flex flex-col item-center">
    <span class="my-8 text-4xl text-gray-700">{{ count }}</span>
    <button
      class="rounded bg-sky-600 px-4 py-2 font-medium text-white hover:bg-sky-800"
      @click="increment"
    >
      增加1
    </button>
  </div>
</template>
