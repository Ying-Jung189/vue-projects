import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useProductsStore = defineStore('useProductsStore', () => {
  const productsList = ref([])
  async function fetchProducts() {
    this.isLoading = true // 1. 開始轉圈圈

    // 假裝等 1 秒 (模擬網路慢)
    await new Promise((r) => setTimeout(r, 1000))

    // 手寫死資料
    this.productsList = [
      {
        id: 0,
        product: '原味貝果',
        price: 40,
      },
      {
        id: 1,
        product: '起士貝果',
        price: 45,
      },
      {
        id: 2,
        product: '藍莓貝果',
        price: 45,
      },
      {
        id: 3,
        product: '巧克力貝果',
        price: 45,
      },
      {
        id: 4,
        product: '草莓貝果',
        price: 45,
      },
      {
        id: 5,
        product: '藍莓起士貝果',
        price: 50,
      },
      {
        id: 6,
        product: '伯爵茶貝果',
        price: 50,
      },
      {
        id: 7,
        product: '堅果葡萄乾貝果',
        price: 55,
      },
      {
        id: 8,
        product: '培根起士貝果',
        price: 60,
      },
    ]

    this.isLoading = false // 2. 停止轉圈圈
  }

  return { productsList, fetchProducts }
})
