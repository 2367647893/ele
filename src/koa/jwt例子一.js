const Koa = require('koa')
const koajwt = require('koa-jwt')
const jsonwebtoken = require('jsonwebtoken')
const util = require('util')
const koabody = require('koa-bodyparser')

const app = new Koa()

const secret = 'xsa!@'

app.use(koabody())

app.use(async (ctx, next) => {
  return next()
    .catch(err => {
      if (err.status === 401) {
        ctx.status = 401
        let html = `
        <h1>koa2 request post demo</h1>
        <form method="POST" action="/api/login">
          <p>userName</p>
          <input name="username" /><br/>
          <p>nickName</p>
          <input name="password" /><br/>
          <button type="submit">submit</button>
        </form>
      `
      ctx.body = html
      } else {
        console.log(3)
        throw err
      }
    })
})

app.use(koajwt({ secret }).unless({
  path: [/^\/api\/login/]
}))

const USER = {
  username: 'xsa',
  password: '123456',
  id: 100
}

app.use(async (ctx, next) => {
  if (ctx.path === '/api/login' && ctx.method === 'POST') {
    const { username, password } = ctx.request.body
    let checkUser = username === USER.username &&
      password === USER.password

    if (checkUser) {
      ctx.body = {
        code: 200,
        msg: '登录成功',
        token: jsonwebtoken.sign(
          { name: USER.username, id: USER.id },
          secret,
          { expiresIn: '1h' },
        )
      }

    } else {
      ctx.body = {
        code: 400,
        msg: '用户名密码不匹配',
      }
    }

  } else if (ctx.path === '/api/user' && ctx.method === 'GET') {
    let token = ctx.header.authorization
    console.log(ctx.header)
    let payload = await util.promisify(jsonwebtoken.verify)(token.split(' ')[1], secret)
    ctx.body = {
      code: 200,
      data: payload,
      msg: '请求成功',
    }
  }
})

app.listen(3000, () => {
  console.log('listening 3000')
})

// const Koa = require('koa')
// const session = require('koa-session')
// const jwt = require('jsonwebtoken')
// const koajwt = require('koa-jwt')
// const { query } = require('./db')

// const app = new Koa()

// app.keys = ['some secret hurr']

// const secret = '!xsa@'

// app.use(koajwt({
//   secret,
// }).unless({
//   path: [/\/user\/login/]
// }))

// const CONFIG = {
//   // cookie的key (默认是 koa.sess)
//   key: 'koa.sess', 

//   // session 过期时间 以毫秒ms为单位计算
//   maxAge: 4000,

//   // 自动提交到响应头 (默认是 true)
//   autoCommit: true,
  
//   // 是否允许重写 (默认是 true)
//   overwrite: true,

//   // 是否设置 HttpOnly 如果在 Cookie 中设置了 HttpOnly 属性
//   // 那么通过程序(JS脚本 Applet等)将无法读取到 Cookie 信息 这样能有效的防止XSS攻击
//   // (默认 true)
//   httpOnly: true,

//   // 这个是对客户端Cookie的签名 也就是用一个特点的字符加密
//   // 保证客户端Cookie不会被伪造出来 (默认是 true)
//   signed: true,

//   // 是否每次响应时刷新Session的有效期 (默认是 false)
//   rolling: true, 

//   // 是否在 Session 快过期时刷新 Session 的有效期 (默认是 false)
//   renew: false, 

//   store: {
//     get () {
//       console.log(1)
//     },

//     set (session) {
//       query(
//         `insert into session (id, name, data) values 
//         ('SESSION${session}', '2000-11-11', '${session}')`
//       )
//     },

//     destroy () {
//       console.log(3)
//     }
//   }
// }

// app.use(session(CONFIG, app))


// // jwt 生成 token
// const token = jwt.sign(
//   { name: 123 }, 
//   secret, 
//   { expiresIn:  60 } // 到期时间 x秒
// )
// console.log(token, 1)
// console.log(jwt.decode(token))


// app.use(async ctx => {
//   if (ctx.url === '/login') {
//     ctx.session = {
//       token: Math.random().toString(36).substr(2),
//       count: 0,
//     }
//     // const x0 = `INSERT INTO session (name, data) values ('2020-12-12', '${JSON.stringify(ctx.session)}')`
//     // query(x0)
//     // ctx.cookies.set(
//     //   'koa.sess',
//     //   ctx.session,
//     //   {
//     //     domain: 'localhost',  // 写cookie所在的域名
//     //     path: '/index',       // 写cookie所在的路径
//     //     maxAge: 10 * 60 * 1000, // cookie有效时长
//     //     expires: new Date('2017-02-15'),  // cookie失效时间
//     //     httpOnly: false,  // 是否只用于http请求中获取
//     //     overwrite: false  // 是否允许重写
//     //   },
//     // )
//     ctx.body = ctx.session

//   } else if (ctx.url === '/') {
//     ctx.session.count = ctx.session.count + 1
//     ctx.body = ctx.session
//   }
// })

// app.listen(8080, () => {
//   console.log('启动成功')
// })
