require('module-alias/register')

const Koa = require('koa')
const fs = require('fs')
const path = require('path')
const query = require('@db/query')

const app = new Koa()

// sql 目录
const baseDir = path.join(__dirname, '../sql')

/**
 * 读取文件目录
 * @param  {string} path 文件目录
 * @param  {string} encoding 编码
 * @return {string} 目录文件列表
 */
const readDir = (path, encoding = 'utf8') => {
  return fs.readdirSync(path, encoding)
}

/**
 * 解析 sql 内容
 * @param  {string} str sql 文本 
 * @return {array} sql 语句数组
 */
const getFileText = str => {
  return str.split(';').filter(s => s.trim().length && s.trim())
}

/**
 * 创建 sql
 * @param  {string} str sql 文本 
 * @return {boolean} true 成功 | false 创建失败
 */
const createSql = str => {
  console.log( query(str) )
}

const readySql = () => {
  readDir(baseDir).forEach(file => {
    const sqlList = fs.readFileSync(path.join(baseDir, file), 'utf8')
    getFileText(sqlList).forEach(sql => {
      console.log(sql)
      createSql(sql)
    })
  })
}

readySql()

app.listen(8888, () => {
  console.log('执行了')
})