const path = require('path')
const fs = require('fs')
const dir = require('./dir')
const file = require('./file')

async function context (ctx, fullStaticPath) {
  let content = ''

  // 当前的某一个文件
  let reqPath = path.join(fullStaticPath, ctx.url)

  // 判断路径是否存在
  let exist = fs.existsSync(reqPath)

  // 判断路径是否正确
  if (!exist) {
    // 路径不存在
    content = '404'

  } else {
    // 检查文件是否存在于当前目录中
    const stat = fs.statSync(reqPath)
    
    // 如果是目录
    if (stat.isDirectory()) {
      content = dir(ctx.url, reqPath)
    
    // 如果是文件
    } else {
      content = await file(reqPath)
    }
  }
  
  return content
}

module.exports = context