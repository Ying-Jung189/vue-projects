<script setup>
import { reactive } from 'vue'
import BaseInput from '@/components/BaseInput.vue'
import FormButton from '@/components/FormButton.vue'
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
</script>
<template>
  <main>
    <h2>請填寫以下資料</h2>
    <section>
      <BaseInput label="Email" v-model="formData.email" :error="errors.email" />
      <BaseInput label="密碼" v-model="formData.password" :error="errors.password" />
      <BaseInput
        label="確認密碼"
        v-model="formData.confirmPassword"
        :error="errors.confirmPassword"
      />
      <BaseInput label="暱稱" v-model="formData.nickname" :error="errors.nickname" />
      <!-- 送出按鈕v-slot -->
      <div class="btn-group">
        <FormButton type="submit" :is-loading="loading">註冊</FormButton>
        <FormButton type="button" variant="secondary">取消</FormButton>
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
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
}
</style>
