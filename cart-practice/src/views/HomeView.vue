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

const handleAddToCart = (product) => {
  shoppingCart.addToCart(product)
}
</script>

<template>
  <nav class="nav-bar">
    <button class="cart-btn" @click="shoppingCart.toggleOpen">購物車</button>
  </nav>
  <main>
    <ShoppingCart />
    <!-- 商品首頁 -->
    <section>
      <!-- 商品元件帶入 -->
      <ProductsList :products="productsStore.productsList" @buyItem='handleAddToCart' />
    </section>
  </main>
</template>
<style scoped>
main {
  position: relative;
  height: 100vh;
}

section {
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
}


input {
  margin: 24px 0;
  width: 100%;
  padding: 8px;
}

.nav-bar {
  width: 100%;
  padding: 16px;

  .cart-btn {
    background-color: green;
    color: white;
  }

  .cart-btn:hover {
    background-color: darkgreen;
    transition: all .3s ease;
    padding: 8px;
  }
}
</style>
