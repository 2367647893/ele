const Koa = require('koa')
const views = require('koa-views')
const serve = require('koa-static')
const router = require('koa-router')()

const app = new Koa()

// index: 默认 index.html 
// defer: false 默认显示最上面的静态目录
// 一般设置 defer: true 访问下游的模板 不走 koa-static 设置的目录的模板
app.use(
  serve(
    __dirname + '/page', 
    { defer: true },
  )
)
app.use(
  serve(
    __dirname + '/static', 
    { defer: true },
  )
)

app.use(
  views('view', {
    map: {
      // 以 ejs 模板渲染 每个 .html 文件
      html: 'ejs' 
    }
  })
)

// 如果 koa-static 的 index 属性为默认值 则默认根路径 会访问
// 静态目录 page 的 index.html 不会走下面这个路由的 根路径
// 但是非根路径的路由可以继续访问
/* 
  // 例如:
  router.get('/abc', async ctx => {
    await ctx.render('index', {
      title: '小花',
    })
  })
*/
router.get('/', async ctx => {console.log(2)
  await ctx.render('index', {
    title: '小花',
  })
})

app.use(router.routes()).use(router.allowedMethods())

app.listen(8080, () => console.log('8080'))
