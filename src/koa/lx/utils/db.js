const mysql = require('mysql')

const pool = mysql.createPool({
  host: 'localhost',  // 数据库地址
  user: 'root', // 数据库用户
  password: 'woaibahuo2', // 数据库密码
  database: 'xsa',  // 选中数据库
})

let query = (sql, values) => {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      if (err) reject(err)
      connection.query(sql, values, (err, rows) => {
        if (err) reject(err)
        resolve(rows)
      })
      connection.end()
    })
  })
}

exports.query = query
