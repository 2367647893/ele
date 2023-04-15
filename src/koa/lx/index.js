const Koa = require('koa')
const session = require('koa-session')
const MysqlSession = require('koa-mysql-session')

const app = new Koa()

app.keys = ['some secret hurr']

const CONFIG = {
  // cookie的key (默认是 koa.sess)
  key: 'koa.sess', 

  // session 过期时间 以毫秒ms为单位计算
  maxAge: 4000,

  // 自动提交到响应头 (默认是 true)
  autoCommit: true,
  
  // 是否允许重写 (默认是 true)
  overwrite: true,

  // 是否设置 HttpOnly 如果在 Cookie 中设置了 HttpOnly 属性
  // 那么通过程序(JS脚本 Applet等)将无法读取到 Cookie 信息 这样能有效的防止XSS攻击
  // (默认 true)
  httpOnly: true,

  // 这个是对客户端Cookie的签名 也就是用一个特点的字符加密
  // 保证客户端Cookie不会被伪造出来 (默认是 true)
  signed: true,

  // 是否每次响应时刷新Session的有效期 (默认是 false)
  rolling: true, 

  // 是否在 Session 快过期时刷新 Session 的有效期 (默认是 false)
  renew: false, 
}

app.use(session(CONFIG, app))

app.listen(8080, () => {
  console.log('启动成功')
})
