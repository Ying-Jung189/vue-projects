import { reactive, computed } from 'vue'
import { defineStore } from 'pinia'

export const useInputStore = defineStore('inputStore', () => {
  // 表單資料
  const formData = reactive({
    email: '',
    password: '',
    confirmPassword: '',
    nickname: '',
  })

  // 錯誤訊息 (預設都是空字串，所以畫面上不會顯示錯誤)
  const errors = reactive({
    email: '',
    password: '',
    confirmPassword: '',
    nickname: '',
  })

  function reset() {
    formData.email = ''
    formData.password = ''
    formData.confirmPassword = ''
    formData.nickname = ''
  }

  const register = async () => {
    //模擬資料庫
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        //localStorage抓值轉成object
        const existingUsers = JSON.parse(localStorage.getItem('users') || '[]')

        // 【模擬後端驗證】：檢查 Email 是否已被註冊
        const isDuplicate = existingUsers.some((user) => user.email === formData.email)

        if (isDuplicate) {
          reject(new Error('此 Email 已經被註冊過了'))
          return
        }

        const newUser = {
          email: formData.email,
          password: formData.password, // 實務上後端會加密，這裡練習先存明碼
          nickname: formData.nickname,
          createdAt: new Date().toISOString(),
        }
        existingUsers.push(newUser)
        localStorage.setItem('users', JSON.stringify(existingUsers))

        resolve({ success: true, message: '註冊成功', user: newUser })
      }, 1500)
    })
  }

  return { formData, errors, reset, register }
})
