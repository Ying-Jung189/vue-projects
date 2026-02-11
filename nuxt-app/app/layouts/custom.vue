<template>
  <div class="bg-sky-100 px-4 py-8">
    <p class="text-2xl text-sky-500">custom布局</p>
    <slot></slot>
    <slot name="footer">
      <footer class="mt-6 flex justify-center bg-white py-4">
        <NuxtLink to="/" class="font-bold text-gray-500">回首頁</NuxtLink>
      </footer>
    </slot>
  </div>
</template>
