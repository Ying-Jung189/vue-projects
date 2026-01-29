import { setActivePinia, createPinia } from 'pinia'
import { describe, it, expect, beforeEach } from 'vitest'
import { useCartStore } from '@/stores/useCartStore'

describe('購物車 Store 測試', () => {
  beforeEach(() => {
    // 每個測試開始前，重新初始化 Pinia，確保資料乾淨
    setActivePinia(createPinia())
  })

  it('添加商品時，如果商品不在車內，應該新增並設數量為 1', () => {
    const cart = useCartStore()
    const product = { id: 1, product: '測試蘋果', price: 100 }

    cart.addToCart(product)

    expect(cart.cartList.length).toBe(1)
    expect(cart.cartList[0].qty).toBe(1)
  })

  it('總價計算應該正確', () => {
    const cart = useCartStore()
    cart.cartList = [
      { id: 1, price: 100, qty: 2 }, // 200
      { id: 2, price: 50, qty: 1 }, // 50
    ]
    expect(cart.totalPrice).toBe(250)
  })

  it('當更新數量小於 1 時，應該自動移除商品', () => {
    const cart = useCartStore()
    cart.cartList = [{ id: 1, product: '蘋果', price: 100, qty: 1 }]

    cart.updateQuantity(1, 0) // 數量降到 0

    expect(cart.cartList.length).toBe(0)
  })
})
