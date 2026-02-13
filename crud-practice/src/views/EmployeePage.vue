<script setup>
import SearchBar from '@/components/SearchBar.vue'
import EmployeeList from '@/components/EmployeeList.vue'
</script>

<template>
  <nav>
    <h1>員工資料</h1>
    <button class="nav-btn">登出</button>
  </nav>
  <main>
    <SearchBar></SearchBar>
    <EmployeeList></EmployeeList>
  </main>
</template>

<style scoped>
nav {
  background-color: azure;
  display: flex;
  justify-content: space-between;
  padding: 16px;
  h1 {
    font-size: 24px;
    font-weight: 700;
    color: darkblue;
  }
  .nav-btn {
    appearance: none;
    outline: none;
    border: none;
    background-color: transparent;
    color: darkblue;
    transition: all 0.3s ease;
    &:hover {
      color: blue;
    }
  }
}

main {
  padding: 24px 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
</style>
