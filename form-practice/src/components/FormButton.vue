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
    <slot></slot>
  </button>
</template>
<style scoped>
.btn {
  padding: 4px 8px;
  border-radius: 4px;
  outline: none;
  border: none;
}
.btn-primary {
  background-color: darkcyan;
  color: white;
}
.btn-secondary {
  background-color: darkgrey;
  color: white;
}
</style>
