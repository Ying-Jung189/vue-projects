<script setup>
import RoundApplyButton from './components/round/RoundApplyButton.vue';
const BaseButton = resolveComponent('BaseApplyButton');
const RoundButton = resolveComponent('RoundApplyButton');

const useRound = ref(false);
const notify = () => {
  useNuxtApp().$toast.info('產生通知');
};
</script>

<template>
  <!-- <div>
    <NuxtPage></NuxtPage>
  </div> -->
  <div class="">
    <h1 class="m-4 text-xl text-gray-800">
      <Icon name="logos:nuxt" size="40"></Icon>
      layout 示範，全部頁面都會用到
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
      <component :is="useRound ? RoundButton : BaseButton">立即報名</component>
    </div>
    <div class="flex flex-col items-center mt-2">
      <RoundApplyButton class="flex items-center gap-2" @click="notify"
        ><Icon name="mdi-light:bell" size="20"></Icon>傳送通知</RoundApplyButton
      >
    </div>
  </div>
</template>
