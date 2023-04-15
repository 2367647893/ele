function log (ctx) {
  console.log(ctx.method, 1)  // 请求方法
  console.log(ctx.header.host, 2) // host
  console.log(ctx.url, 3) // 路径
}

module.exports = () => {
  return async (ctx, next) => {
    log(ctx)
    next()
  }
}


// 短轮训
setInterval(() => {
  axios() // 20ms 404 
}, 1000)

// 长轮训  1s 200 消息
axios({
  url,
  time: 5000,
  fail () {
    axios
  }
})

// 长连接
// WebSocket
// 前端 <-> 后台

// ws === http
// wss === https
new WebSocket('ws')