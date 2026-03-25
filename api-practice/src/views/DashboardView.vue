<script setup>
import { onMounted } from "vue";
import { storeToRefs } from "pinia";
import { useDataStore } from "@/stores/useDataStore";

const dataStore = useDataStore();
const { data, loading, error } = storeToRefs(dataStore);

onMounted(() => {
  dataStore.fetchData();
});
</script>
<template>
  <div v-if="loading">載入中...</div>
  <div v-else-if="error">{{ error }}</div>
  <el-card>
    <el-table class="employee-list" :data="data" style="width: 100%">
      <el-table-column prop="name" label="姓名" width="180" />
      <el-table-column prop="company.bs" label="職位" />
      <el-table-column prop="email" label="Email" />
    </el-table>
  </el-card>
</template>
<style scoped>
.upper-nav {
  text-align: right;
}
.employee-list {
  width: 100%;
}
</style>
