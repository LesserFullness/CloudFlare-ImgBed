export const onRequest = async (context) => {
  if (context.request.method === "OPTIONS") {
    return new Response(null, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Max-Age": "86400"
      },
      status: 204
    });
  }

  const resp = await context.next();
  const headers = new Headers(resp.headers);
  headers.set("Access-Control-Allow-Origin", "*");
  return new Response(resp.body, { ...resp, headers });
};
