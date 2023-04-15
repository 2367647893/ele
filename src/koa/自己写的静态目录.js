const Koa = require('koa')
const fs = require('fs')
const mime = require('mime-types')
const app = new Koa()
const path = require('path')

// 展示文件列表
const fileList = (files, url) => {
  const str = files.reduce((html, file) => {
    html += `
      <li>
        <a href="${url === '/' ? '' : url}/${file}">
          ${file}
        </a>
      </li>
    `
    return html
  }, '')
  return `<ul>${str}</ul>`
}

// 判断是文件 || 目录
const fileContext = (urlPath, ctx) => {
  // 展示内容
  let content = ''
  // 获取文件的类型
  const mimeType = mime.lookup()

  // 如果是目录 直接展示
  if (fs.statSync(urlPath).isDirectory()) {
    const files = fs.readdirSync(urlPath)
    content = fileList(files, ctx.url)
  
  // 如果是文件 读取文件的内容
  } else {
    // Content-Type 用于定义网络文件的类型和网页的编码
    // 决定浏览器将以什么形式 什么编码读取这个文件
    content = fs.readFileSync(urlPath)
    ctx.set('content-type', mimeType)
  }

  return content
}

app.use(ctx => {
  if (ctx.url === '/favicon.ico') return false

  const pathUrl = path.join(__dirname, ctx.url)
  
  ctx.body = fileContext(pathUrl, ctx)
})

app.listen(3002, () => 
  console.log('启动了 http://localhost:3002')
)
