<script setup>
import {
  onMounted
} from 'vue'
import ProductsList from '../components/ProductsList.vue'
import ShoppingCart from '../components/ShoppingCart.vue'
import { useCartStore } from '@/stores/useCartStore'
import { useProductsStore } from '@/stores/useProductsStore'

const productsStore = useProductsStore()
const shoppingCart = useCartStore()

onMounted(() => {
  productsStore.fetchProducts()
})

const handleAddToCart = (product)=>{
  shoppingCart.addToCart(product)
}
</script>

<template>
  <main>
    <!-- 商品首頁 -->
    <!-- 搜尋欄 -->
    <input type="search" name="" id="">
    <!-- 商品元件帶入 -->
    <ProductsList :products="productsStore.productsList" @buyItem = 'handleAddToCart' />
    <!-- 購物車帶入，之後改為彈窗 -->
    <ShoppingCart  :cart = "shoppingCart.cartList"/>
  </main>
</template>
<style scoped>
main {
  width: 100%;
}
input{
  margin-bottom: 24px;
  width: 100%;
  padding: 8px;
}
</style>
