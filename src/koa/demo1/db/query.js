const mysql = require('mysql')
const config = require('@root/config')
const { host, user, password, database } = config.database

const pool = mysql.createPool({
  host,
  user,
  password,
  database,
})

const query = (sql, values) => {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      if (err) {
        resolve(err)
        return false
      }
      connection.query(sql, values, (err, rows) => {
        err ? reject(err) : resolve(rows)
        connection.release()
      })
    })
  })
}

module.exports = query