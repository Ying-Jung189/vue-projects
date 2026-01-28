<script setup>
  defineProps({
      cart: {
    type: Array,
    required: true
  }
  })
</script>

<template>
  <ul class="">
    <li v-for="item in cart" :key="item.id">
      <p>{{ item.product }}</p>
      <p>{{ item.price }}</p>
      <p>{{ item.qty }}</p>
    </li>
  </ul>
  <!-- 購物車 -->
</template>

<style scoped>

</style>
