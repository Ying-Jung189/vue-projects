//寫api的地方
// server/api/test.ts
export default defineEventHandler((event) => {
  return {
    message: 'Hello! 這是我的第一支 Nuxt API',
    time: new Date(),
  };
});
