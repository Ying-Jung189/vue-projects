import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useCartStore = defineStore('useCartStore', () => {
  const cartList = ref([])

  function addToCart(product) {
    const cartItem = cartList.value.find((item) => item.id === product.id)
    if (cartItem) {
      cartItem.qty += 1
    } else {
      const newCartItem = { ...product, qty: 1 }

      cartList.value.push(newCartItem)
    }
  }

  return { cartList, addToCart }
})
