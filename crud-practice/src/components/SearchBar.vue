<script setup></script>
<template>
  <input type="text" class="input-field" />
</template>
<style scoped>
.input-field {
  box-sizing: border-box;
  width: 100%;
  padding: 8px;
  font-size: 16px;
  border-radius: 4px;
  border: 1px solid #aaa;
  outline: none;
  &:focus {
    border-color: blue;
  }
}
</style>
