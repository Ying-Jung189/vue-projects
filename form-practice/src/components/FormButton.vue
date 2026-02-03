<script setup>
defineProps({
  isLoading: Boolean,
  variant: {
    type: String,
    default: 'primary',
  },
  type: {
    type: String,
    default: 'submit',
  },
})
</script>
<template>
  <button
    class="btn"
    :type="type"
    :class="[`btn-${variant}`, { 'is-loading': isLoading }]"
    :disabled="isLoading"
  >
    <span v-if="isLoading" class="spinner">↻</span>
    <span v-else><slot></slot></span>
  </button>
</template>
<style scoped>
.btn {
  padding: 4px 8px;
  border-radius: 4px;
  outline: none;
  border: none;
  cursor: pointer;
}
.btn-primary {
  background-color: darkcyan;
  color: white;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: rgb(45, 120, 122);
  }
}
.btn-secondary {
  background-color: darkgrey;
  color: white;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: rgb(148, 148, 148);
  }
}
.spinner {
  display: inline-block;
  animation: spin 1s linear infinite;
}
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
