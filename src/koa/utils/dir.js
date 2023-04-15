// const url = require('url')
// const path = require('path')
// const walk = require('./walk')
const fs = require('fs')

function dir (url, reqPath) {
  console.log(reqPath, 'reqPath')
  let contentList = fs.readdirSync(reqPath)
  
  const html = contentList.reduce((liList, file) => {
    liList += `
      <li>
        <a href="${url === '/' ? '' : url}/${file}">
          ${file}
        </a>
      </li>
    `
    return liList
  }, '')

  return `<ul>${html}</ul>`
}

module.exports = dir