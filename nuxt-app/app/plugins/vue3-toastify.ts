import Vue3Toastify, { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

export default defineNuxtPlugin((nuxtApp) => {
  console.log('🔥 Toast Plugin 正在初始化...');
  nuxtApp.vueApp.use(Vue3Toastify, { autoClose: 3000 });

  return {
    provide: { toast },
  };
});
