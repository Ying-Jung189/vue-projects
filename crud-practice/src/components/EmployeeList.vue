<script setup>
import EmployeeItem from './EmployeeItem.vue'
import { useEmployeeStore } from '../stores/useEmployeeStore'

const employeeStore = useEmployeeStore()
</script>
<template>
  <EmployeeItem></EmployeeItem>
</template>
<style scoped></style>
