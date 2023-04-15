const fs = require('fs')
const Koa = require('koa')
const path = require('path')
const { query } = require('./utils/db')

const app = new Koa()

/**
 * 获取 sql 目录
 * @param {string} sqlPath 文件所在的路径
 */
const getSqlDir = sqlPath => fs.readdirSync(sqlPath)


/**
 * 获取 sql 目录
 * @param {string} sqlPath 文件所在的路径
 * @return {array} 脚本文件内容
 */
const getSql = sqlPath => {
  const sqlArr = [] // 保存所有 sql
  const files = getSqlDir(sqlPath)  // 获取当前目录

  files.forEach(file => {
    const list = fs.readFileSync(path.join(sqlPath, file), 'utf8')
    list.split(';').forEach(sql => sqlArr.push(sql.trim()))
  })

  return sqlArr
}


/**
 * 创建表
 */
const addSqlTable = () => {
  const sqlPath = path.join(__dirname, 'sql')
  getSql(sqlPath).forEach(sql => sql && query(sql))
}

addSqlTable()

app.listen(8080, () => {
  console.log('启动成功')
})

