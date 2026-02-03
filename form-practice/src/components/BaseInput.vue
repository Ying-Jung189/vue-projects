<script setup>
defineProps({
  // 1. Label 文字
  label: {
    type: String,
    required: true,
  },
  // 2. 接收 v-model 的值 (Vue 3 固定寫法叫做 modelValue)
  modelValue: {
    type: [String, Number],
    default: '',
  },
  // 3. 輸入框類型 (讓外部可以傳 type="password")
  type: {
    type: String,
    default: 'text',
  },
  // 4. 錯誤訊息 (如果有字就顯示，沒字就隱藏)
  error: {
    type: String,
    default: '',
  },
})
</script>
<template>
  <div class="input-group" :class="{ 'has-error': error }">
    <label for="">{{ label }}<span class="required">*</span></label>
    <input
      :type="type"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
    <!-- $emit(值, event傳遞過去的值) -->
    <p v-if="error" class="error-message">
      {{ error }}
    </p>
  </div>
</template>
<style scoped>
.input-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
label {
  font-size: 14px;
  font-weight: 500;
  .required {
    color: red;
  }
}
input[type='text'] {
  padding: 8px;
  border-radius: 8px;
  border: 1px solid #aaa;
  &:focus {
    outline: none;
    border: 1px solid darkcyan;
  }
}
.has-error input[type='text'] {
  border: 1px solid red;
}
.error-message {
  margin: 0;
  color: red;
  font-size: 12px;
}
</style>
