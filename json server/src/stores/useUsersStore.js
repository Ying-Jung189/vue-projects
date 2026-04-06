import { ref } from "vue";
import { defineStore } from "pinia";
import {
  getUsers,
  createUser as createUserApi,
  updateUser as updateUserApi,
  deleteUser as deleteUserApi,
} from "@/api/user";

export const useUsersStore = defineStore("users", () => {
  const users = ref([]);
  const loading = ref(false);
  const error = ref(null);

  async function fetchUsers() {
    loading.value = true;
    error.value = null;

    try {
      users.value = await getUsers();
    } catch (err) {
      error.value = err.message;
    } finally {
      loading.value = false;
    }
  }

  async function addUser(data) {
    await createUserApi(data);
    await fetchUsers();
  }

  async function removeUser(id) {
    await deleteUserApi(id);
    await fetchUsers();
  }

  async function editUser(id, data) {
    await updateUserApi(id, data);
    await fetchUsers();
  }

  return {
    users,
    loading,
    error,
    fetchUsers,
    addUser,
    removeUser,
    editUser,
  };
});