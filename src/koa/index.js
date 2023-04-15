const Koa = require('koa')
const util = require('util')
const path = require('path')
const fs = require('fs')
const Busboy = require('busboy')

const app = new Koa()

app.use(ctx => {
  const busboy = new Busboy({ headers: ctx.headers })
})

app.listen(8000, () => {
  console.log(`8000端口`)
})
