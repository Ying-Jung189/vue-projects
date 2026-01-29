<script setup>
import { useCartStore } from '@/stores/useCartStore'
import { storeToRefs } from 'pinia'
const shoppingCart = useCartStore()
const { cartList } = storeToRefs(shoppingCart)
//宣告的話會帶入初始的array如果有改變布回更新到，要加storeToRefs解構

</script>

<template>
  <div class="drawer" :class="{ open: shoppingCart.isOpen }">
    <h3>購物車</h3>
    <ul class="cartList">
      <li v-for="item in cartList" :key="item.id">
        <div class="item-block">
          <div class="item-info">
            <p>{{ item.product }}</p>
            <p>{{ item.price }}</p>
          </div>
          <div class="qty-handler">
            <button class="qty-btn" @click="shoppingCart.updateQuantity(item.id, item.qty - 1)">-</button>
            <p>{{ item.qty }}</p>
            <button class="qty-btn" @click="shoppingCart.updateQuantity(item.id, item.qty + 1)">+</button>
          </div>
        </div>
        <div class="item-total">{{ item.qty * item.price }}</div>
        <button class="delete-btn" @click="shoppingCart.deleteFromCart(item.id)">移除商品</button>
      </li>
    </ul>
    <div class="price-section">
      <p v-if="shoppingCart.cartList.length === 0">購物車內無商品</p>
      <div v-else class="total-price">總價<span>{{ shoppingCart.totalPrice }}</span></div>
    </div>
  </div>
  <!-- 購物車 -->
</template>

<style scoped>
.drawer {
  top: 0;
  position: absolute;
  left: -100%;
  height: 100vh;
  overflow-y: auto;
  min-width: 240px;
  background-color: aliceblue;
  margin: 24px 8px;
  border-radius: 0 8px 8px 0;
  color: black;
  transition: all .3s ease;
  padding: 8px;
}

.drawer.open {
  left: 0;
}

h3 {
  font-size: 20px;
  font-weight: 700;
}

.cartList {
  list-style: none;
  padding: 0;
}

.cartList li {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 16px 0;

  .qty-btn {
    background-color: green;
    color: white;
  }

  .item-info {
    display: flex;
    gap: 8px;
  }

  .qty-handler {
    display: flex;
    gap: 4px;
  }
}

.price-section {
  margin-top: 16px;
  font-size: 18px;
  display: flex;
  justify-content: space-between;
}

.delete-btn {
  background-color: red;
  color: white;
  width: 100%;
  padding: 4px;
  border-radius: 8px;
  margin-top: 16px;
}

.delete-btn:hover {
  background-color: darkred;
  transition: all .3s ease;
}
</style>
