const Koa = require('koa')
const router = require('./router')

const app = new Koa()

app
  .use(router.routes())
  .use(router.allowedMethods())

app.listen(8080, () => {
  console.log('端口为 8080')
})
