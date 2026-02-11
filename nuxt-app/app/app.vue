<script setup>
const BaseApplyButton = resolveComponent('BaseApplyButton');
const RoundApplyButton = resolveComponent('RoundApplyButton');

const useRound = ref(false);
</script>

<template>
  <!-- <div>
    <NuxtPage></NuxtPage>
  </div> -->
  <div class="">
    <h1 class="m-4 text-xl text-gray-800">
      Nuxt layout 示範，全部頁面都會用到
    </h1>
    <!-- <NuxtLayout name="default">
      <template #header>
        <p class="px-6 pt-4 text-xl text-blue-800">header插槽</p>
      </template>
      <template #default>
        <p class="px-6 pt-4 text-xl text-blue-800">會放到沒設name的slot中</p>
      </template>
      <template #footer>
        <p class="px-6 pt-4 text-xl text-blue-800">footer插槽</p>
      </template>
    </NuxtLayout> -->
    <NuxtLayout>
      <NuxtPage></NuxtPage>
    </NuxtLayout>
    <div class="flex flex-col items-center mt-2">
      <h2 class="text-xl">動態元件</h2>
      <label for="" class="my-6 flex items-center">
        <input
          type="checkbox"
          name=""
          id=""
          v-model="useRound"
          class="size-4"
        />
        <span>使用圓角按鈕</span>
      </label>
      <component
        :is="useRound ? RoundApplyButton : BaseApplyButton"
      ></component>
    </div>
  </div>
</template>
