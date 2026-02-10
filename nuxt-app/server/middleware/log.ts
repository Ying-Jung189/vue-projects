//middleware是在每一個請求到達 API 或頁面之前，都會先執行的程式碼，
// server/middleware/log.ts
export default defineEventHandler((event) => {
  // 取得使用者正在請求的網址
  const url = getRequestURL(event);

  // 在終端機印出來
  console.log('test:', url.href);
});
