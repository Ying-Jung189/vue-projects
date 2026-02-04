<script setup lang="ts">
const year: number = 2026;
const title: string = `${year}`;
</script>

<template>
  <div>
    <div class="text-6xl text-blue-500 ms-4 my-4">{{ title }}</div>
    <NuxtRouteAnnouncer />
    <NuxtWelcome />
  </div>
</template>
