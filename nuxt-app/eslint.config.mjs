// eslint.config.mjs
import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt({
  // 直接在這裡告訴 Nuxt 你要的風格npm run dev
  stylistic: {
    indent: 2, // 縮排 2 格
    quotes: 'single', // 強制單引號
    semi: false, // 不要分號
    commaDangle: 'always-multiline', // 多行物件結尾要加逗號
    braceStyle: '1tbs', // 大括號不換行
  },
});
