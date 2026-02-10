import type { Config } from 'tailwindcss';

export default <Config>{
  content: [
    './app/**/*.{vue,js,ts,jsx,tsx}',

    // 這些是預設的，留著保險
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.{vue,js,ts}',
    './pages/**/*.{vue,js,ts}',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
