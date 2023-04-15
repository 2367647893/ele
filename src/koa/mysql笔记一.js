const Koa = require('koa')
const mysql = require('mysql')

const app = new Koa()

const pool = mysql.createPool({
  host: 'localhost',  // 数据库地址
  user: 'root', // 数据库用户
  password: 'woaibahuo2', // 数据库密码
  database: 'mysql',  // 选中数据库
})

// 从连接池中取出连接
pool.getConnection((err, connection) => {
  connection.query('select * from db',  (error, results, fields) => {
    console.log(results, 1)
    // connection.end() // 结束会话
  })
  // 会等所有查询结束后 关闭
  connection.end() // 结束会话
})

app.listen(8080, () => {
  console.log(8080)
})




