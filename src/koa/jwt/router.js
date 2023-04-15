const Router = require('koa-router')
const jsonwebtoken = require('jsonwebtoken')

const router = new Router()

const ys = {
  username: 'xsa',
  password: '123',
  id: 1,
}

const Login = ctx => {
  const { username, password } = ctx.request.body.data

  if (ys.username === username && ys.password === password) {
    ctx.body = {
      code: 200,
      msg: '登录成功',
      token: jsonwebtoken.sign(
        { name: ys.username, id: ys.id },
        global.secret,
        { expiresIn: '1h' },
      )
    }

  } else {
    ctx.body = {
      code: 400,
      msg: '用户名密码不匹配',
    }
  }
}

const getUser = async ctx => {
  let token = ctx.header.authorization
  let payload = jsonwebtoken.verify(token, global.secret)
  
  ctx.body = {
    code: 200,
    data: payload,
    msg: '请求成功',
  }
}

router.post('/login', Login)
router.get('/user', getUser)

module.exports = router