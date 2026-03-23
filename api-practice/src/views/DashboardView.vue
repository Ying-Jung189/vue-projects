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
    <p>test</p>
</template>
<style scoped></style>