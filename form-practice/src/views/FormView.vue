<script setup>
import { ref } from 'vue'
import BaseInput from '@/components/BaseInput.vue'
import FormButton from '@/components/FormButton.vue'
import { useInputStore } from '@/stores/inputStore'

const inputStore = useInputStore()
const loading = ref(false)

const handleSubmit = async () => {
  //驗證
  if (!validateForm()) return
  //ui變化
  loading.value = true
  //資料送到store註冊
  try {
    await inputStore.register()
    alert('註冊成功')
  } catch (error) {
    alert(error.message)
  } finally {
    loading.value = false
  }
}
const validateForm = () => {
  //清除紅色訊息
  inputStore.errors.email = ''
  inputStore.errors.password = ''
  inputStore.errors.confirmPassword = ''
  inputStore.errors.nickname = ''
  let isValid = true

  //檢查email 1.是否有寫2.格式(有@)
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!inputStore.formData.email) {
    inputStore.errors.email = 'Email 為必填欄位'
    isValid = false
  } else if (!emailPattern.test(inputStore.formData.email)) {
    inputStore.errors.email = 'Email 格式不正確'
    isValid = false
  }

  //檢查密碼 1.是否有寫2.是否大於8碼
  if (!inputStore.formData.password) {
    inputStore.errors.password = '密碼為必填欄位'
    isValid = false
  } else if (inputStore.formData.password.length < 8) {
    inputStore.errors.password = '密碼必須為8碼以上'
    isValid = false
  }
  //檢查再次輸入密碼 1.是否有寫2.是否與前一個密碼吻合
  if (!inputStore.formData.confirmPassword) {
    inputStore.errors.confirmPassword = '請再次輸入密碼'
    isValid = false
  } else if (inputStore.formData.password !== inputStore.formData.confirmPassword) {
    inputStore.errors.confirmPassword = '兩次密碼輸入不一致'
    isValid = false
  }
  //檢查暱稱 是否有填
  if (!inputStore.formData.nickname) {
    inputStore.errors.nickname = '暱稱為必填欄位'
    isValid = false
  }

  return isValid
}
</script>
<template>
  <main>
    <h2>請填寫以下資料</h2>
    <section>
      <BaseInput
        label="Email"
        v-model="inputStore.formData.email"
        :error="inputStore.errors.email"
      />
      <BaseInput
        label="密碼"
        v-model="inputStore.formData.password"
        :error="inputStore.errors.password"
      />
      <BaseInput
        label="確認密碼"
        v-model="inputStore.formData.confirmPassword"
        :error="inputStore.errors.confirmPassword"
      />
      <BaseInput
        label="暱稱"
        v-model="inputStore.formData.nickname"
        :error="inputStore.errors.nickname"
      />

      <div class="btn-group">
        <FormButton type="button" variant="secondary" @click="inputStore.reset">重設</FormButton>
        <FormButton type="submit" :is-loading="loading" @click="handleSubmit">註冊</FormButton>
      </div>
    </section>
  </main>
</template>
<style scoped>
main {
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
h2 {
  text-align: center;
  font-size: 24px;
  font-weight: 700;
  margin: 24px 0 40px;
}
section {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.btn-group {
  margin-top: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
}
</style>
