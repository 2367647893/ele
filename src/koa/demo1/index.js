require('module-alias/register') // 路径别名
const Koa = require('koa')

const app = new Koa()

app.listen(8888, () => {
  console.log('端口 8888')
})











