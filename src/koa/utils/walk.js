const fs = require('fs')
// const path = require('path')
// const mimes = require('./mimes')

function walk (reqPath) {
  let files = fs.readdirSync(reqPath) // 读取目录的内容

  const fileList = files.reduce((obj, file) => {
    obj[file] = file
    return obj
  }, {})
  
  return Object.values(fileList)

  // files.forEach(file => {
  //   const arr = file.split('.')
  //   // 判断是文件 还是目录
  //   let itemMime = arr.length > 1 ? arr.pop() : 'undefinde'
    
  //   // 是文件
  //   if (mimes[itemMime]) {
  //     fileList.push(file)

  //   } else {
  //     dirList.push(file)
  //   }
  // })

  // for (let i = 0, len = files.length; i < len; i++) {
  //   let item = files[i]

  //   let itemArr = item.split('.')
  //   // 判断是目录 还是文件
  //   let itemMime = (itemArr.length > 1) ? itemArr[itemArr - 1] : 'und'

  //   if (typeof mimes[itemMime] === 'undefined') {
  //     dirList.push(files[i])

  //   } else {
  //     fileList.push(files[i])
  //   }
  // }
  // let result = dirList.concat(fileList)
  // return result
}

module.exports = walk