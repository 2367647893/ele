const Koa = require('koa')
const koajwt = require('koa-jwt')
const koabody = require('koa-bodyparser')
const router = require('./router')

const app = new Koa()

global.secret = 'xsa!@' // 加盐

app.use(koabody())

app.use(async (ctx, next) => {
  return next().catch((err) => {
    if (401 == err.status) {
      ctx.status = 401;
      ctx.body = 'Protected resource, use Authorization header to get access\n';
    
    } else {
      throw err;
    }
  });
})

app.use(koajwt({ secret: global.secret }).unless({
  path: [/^\/login/]
}))

app
  .use(router.routes())
  .use(router.allowedMethods())

app.listen(8080, () => {
  console.log('listening 8080')
})




