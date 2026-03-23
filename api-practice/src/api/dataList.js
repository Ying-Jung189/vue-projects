export async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
   console.log('呼叫 API')
  if (!res.ok) {
    throw new Error("取得使用者資料失敗");
  }

  return res.json();
}
