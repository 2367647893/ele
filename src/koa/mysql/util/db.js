const mysql = require('mysql')

const pool = mysql.createPool({
  host: 'localhost',  // 数据库地址
  user: 'root', // 数据库用户
  password: 'woaibahuo2', // 数据库密码
  database: 'sys',  // 选中数据库
})

let query = function( sql, values ) {

  return new Promise(( resolve, reject ) => {
    pool.getConnection(function(err, connection) {
      if (err) {
        reject( err )
      } else {
        connection.query(sql, values, ( err, rows) => {
          if ( err ) {
            reject( err )
          } else {
            resolve( rows )
          }
          connection.end()
        })
      }
    })
  })
}

module.exports = {
  query
}