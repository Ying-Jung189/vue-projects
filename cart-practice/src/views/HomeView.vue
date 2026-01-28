<script setup>
import {
  onMounted
} from 'vue'
import ProductsList from '../components/ProductsList.vue'
import ShoppingCart from '../components/ShoppingCart.vue'
// import { useCartStore } from '@/stores/useCartStore'
import { useProductsStore } from '@/stores/useProductsStore'

const productsStore = useProductsStore()

onMounted(() => {
  productsStore.fetchProducts()
})
</script>

<template>
  <main>
    <!-- 商品首頁 -->
    <!-- 搜尋欄 -->
    <h1>測試</h1>
    <input type="search" name="" id="">
    <!-- 商品元件帶入 -->
    <ProductsList :products="productsStore.productsList" />
    <!-- 購物車帶入 -->
    <ShoppingCart />
  </main>
</template>
<style scoped>
main {
  width: 100%;
}
</style>
