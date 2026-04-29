
export async function onRequest(context) {
  
  console.log('中间件运行中')

  // 2. 必须继续执行下一个函数/页面（关键！）
  const response = await context.next()

  // 3. 返回响应（不返回就会报 JSON 错误）
  return response
}
