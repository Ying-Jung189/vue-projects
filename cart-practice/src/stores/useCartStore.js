import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCartStore = defineStore(
  'useCartStore',
  () => {
    //用手寫的方式
    // const cartList = ref(JSON.parse(localStorage.getItem('myCart')) || [])
    const cartList = ref([])
    const isOpen = ref(false)

    const totalPrice = computed(() => {
      return cartList.value.reduce((total, item) => total + item.price * item.qty, 0)
    })

    function toggleOpen() {
      isOpen.value = !isOpen.value
    }
    function addToCart(product) {
      const cartItem = cartList.value.find((item) => item.id === product.id)
      if (cartItem) {
        cartItem.qty += 1
      } else {
        const newCartItem = { ...product, qty: 1 }

        cartList.value.push(newCartItem)
      }
      isOpen.value = true
    }
    function updateQuantity(id, targetQty) {
      const cartItem = cartList.value.find((item) => item.id === id)

      if (cartItem) {
        // 數量小於 1 時，看你是要「刪除」還是「維持 1」
        if (targetQty < 1) {
          deleteFromCart(id)
          return
        }

        // 更新數量
        cartItem.qty = targetQty
      }
    }

    function deleteFromCart(id) {
      cartList.value = cartList.value.filter((item) => item.id !== id)
    }

    //監聽cartList
    // watch(
    //   cartList,
    //   (newVal) => {
    //     localStorage.setItem('myCart', JSON.stringify(newVal))
    //   },
    //   { deep: true },
    // )
    return { cartList, isOpen, totalPrice, toggleOpen, addToCart, updateQuantity, deleteFromCart }
  },
  { persist: true },
)
