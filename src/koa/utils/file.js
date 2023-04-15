const fs = require('fs')
const mime = require('mime-types')

function file (filePath) {
  let content = fs.readFileSync(filePath)
  // let content = fs.readFileSync(filePath)
  return content
}

module.exports = file
