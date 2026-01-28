<script setup>
defineProps({
  products: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <ul class="product-group">
    <li v-for="item in products" :key="item.id" class="product-card">
      <h4>{{ item.product }}</h4>
      <span>價錢: {{ item.price }}</span>
    </li>
  </ul>
  <!-- 產品List -->
</template>

<style scoped>
.product-group {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}

.product-card {
  background-color: white;
  border-radius: 8px;
  min-height: 120px;
  color: #333;
  padding: 16px;

  h4 {
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 8px;
  }

  span {
    font-size: 18px;
  }
}
</style>
