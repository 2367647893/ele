const Koa = require('koa')
const path = require('path')
const app = new Koa()
const util = require('util')
// const bodyParser = require('koa-bodyparser')
const { uploadFile } = require('./upload')

// app.use(bodyParser())
app.use( async ( ctx ) => {
  if ( ctx.url === '/' && ctx.method === 'GET' ) {
    // 当GET请求时候返回表单页面
    let html = `
      <form method="POST" action="/upload.json" enctype="multipart/form-data">
        <span>picName:</span><input name="picName" type="text" /><br/>
        <input name="file" type="file" /><br/><br/>
        <button type="submit">submit</button>
      </form>
    `
    ctx.body = html

  } else if ( ctx.url === '/upload.json' && ctx.method === 'POST' ) {
    // 上传文件请求处理
    let result = { success: false }
    let serverFilePath = path.join( __dirname, 'upload-files' )
 
    // 上传文件事件
    result = await uploadFile( ctx, {
      fileType: 'xxxx', // common or album
      path: serverFilePath
    })

    ctx.body = result
  } else {
    // 其他请求显示404
    ctx.body = '<h1>404！！！ o(╯□╰)o</h1>'
  }
})

app.listen(8000, () => {
  console.log('[demo] upload-simple is starting at port 8000')
})
