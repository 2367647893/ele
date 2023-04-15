const Koa = require('koa')
const { query } = require('./db')

const app = new Koa()

async function selectData () {
  let sql = 'select * from db'
  let dataList = await query(sql)
  return dataList
}

async function getData () {
  let dataList = await selectData()
  console.log(dataList, 1)
}

getData()

app.listen(8080, () => {
  console.log(8080)
})
