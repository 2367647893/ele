const Koa = require('koa')
const views = require('koa-views')
const serve = require('koa-static')
const router = require('koa-router')()

const app = new Koa()

// index: 默认 index.html 只支持 .html 模板
// defer: false 默认显示最上面的静态目录
app.use(serve(__dirname + '/page'))
app.use(serve(__dirname + '/static'))

// 没设置 defer: true 这句代码 无效
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
router.get('/', async ctx => {
  await ctx.render('index', {
    title: '小花',
  })
})

app.use(router.routes()).use(router.allowedMethods())

app.listen(8080, () => console.log('8080'))