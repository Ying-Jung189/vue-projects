import { ref } from "vue";
import { defineStore } from "pinia";
import { getData } from "@/api/dataList";

export const useDataStore = defineStore("useDataStore", () => {
  const data = ref([]);
  const loading = ref(false);
  const error = ref(null);
  async function fetchData() {
    loading.value = true;
    error.value = null;

    try {
      data.value = await getData();
      console.log("API 回傳資料:", data.value);
    } catch (err) {
      error.value = err.message;
    } finally {
      loading.value = false;
    }
  }

  return { data, loading, error, fetchData };
});
