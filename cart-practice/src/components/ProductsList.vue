<script setup>
defineProps({
  products: {
    type: Array,
    required: true
  }
})
const emit = defineEmits(['buyItem'])

const buyItem = (product) =>{
  emit('buyItem', product)
}
</script>

<template>
  <ul class="product-group">
    <li v-for="item in products" :key="item.id" class="product-card">
      <h4>{{ item.product }}</h4>
      <span>價錢: {{ item.price }}</span>
      <button class="add-btn" @click = "buyItem(item)">購買</button>
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
  .add-btn{
    margin-top: 16px;
    width: 100%;
    border-radius: 4px;
    background-color: green;
    color: white;
    padding: 4px;
    outline: unset;
    cursor: pointer;
  }
  .add-btn:hover{
    background-color: darkgreen;
    transition: all .3s ease;
  }
}
</style>
