const Router = require('koa-router')
const Busboy = require('busboy')
const path = require('path')
const fs = require('fs')

const router = new Router()

/**
 * 同步创建文件目录
 * @param  {string} dirname 目录绝对地址
 * @return {boolean}        创建目录结果
 */
const createDir = dirname => {
  // 如果目录不存在
  if (!fs.existsSync(dirname)) {
    fs.mkdirSync(dirname)
  }
  return true
}

const update = ctx => {
  const req = ctx.req
  const busboy = new Busboy({ headers: req.headers })

  req.pipe(busboy)

  // 解析请求文件事件
  // fieldname 上传字段
  // file 上传文件流
  // filename 上传文件名
  // mimetype 上传文件后缀
  busboy.on('file', function(fieldname, file, filename) {
    const result = {
      code: 200,
    }
    const ext = path.extname(filename)
    const fileName = `${Math.random().toString(16).substr(2)}${ext}`

    // 创建目录
    createDir('img')

    // 文件保存到指定路径
    file.pipe(fs.createWriteStream(path.join('./img', fileName)))
  })

  // 监听上传完成
  busboy.on('finish', () => {
    console.log('上传完成')
  })

  // 解析表单中除上传文件外的其他字段
  busboy.on('field', (fieldname, file, filename) => {
    console.log(fieldname, 1)
    console.log(filename, 3)
  })

  busboy.on('error', err => {
    console.log('上传错误')
  })

  ctx.status = 200
  ctx.body = '上传成功'
}

router.post('/update', update)

module.exports = router

