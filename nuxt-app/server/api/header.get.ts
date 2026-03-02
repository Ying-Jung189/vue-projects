export default defineEventHandler((event) => {
  const contentType = event.node.req.headers['content-type'];
  return {
    ok: true,
    data: {
      headers: {
        contentType,
      },
    },
  };
});
