#! /usr/bin/env node
const program = require('commander')
const glob = require('glob')
const path = require('path')
const fs = require('fs')
const inquirer = require('inquirer')
const download = require('../lib/download')

program
  .name('qfyw cli')
  .usage('使用帮助')
  .parse(process.argv)

const projectName = process.argv[2]

if (!projectName) {
  program.help()
  return
}

// 获取当前目录下所有文件
const list = glob.sync('*')
let next = undefined
// process.cwd() 执行 node 命令所在的地址
// __dirname 执行的 js 文件所在的根目录
let rootName = path.basename(process.cwd())

// 当前目录不为空
if (list.length) {
  const isFile = list.find(lt => {
    // 每个文件的绝对路径
    const fileName = path.resolve(process.cwd(), lt)
    const isDir = fs.statSync(fileName).isDirectory()
    // 用户输入的文件名 在当前目录下存在 并且是目录
    return projectName === lt && isDir
  })

  // 如果输入的文件名 存在
  if (isFile) {
    next = inquirer.prompt([
      {
        name: 'isRemovePro',
        message: `项目${projectName}已存在, 是否覆盖文件`,
        type: 'confirm',
        default: true,
      }
    ])
      .then(opt => {
        if (opt.isRemovePro) {
          // remove(path.resolve(process.cwd(), projectName))
          rootName = projectName
          return Promise.resolve(rootName)

        } else {
          console.log('停止创建')
          return Promise.resolve(undefined)
        }
      })

  // 目录不存在
  } else {
    console.log(projectName, 'projectName')
    rootName = projectName
    next = Promise.resolve(projectName)
  }

// 如果文件名和根目录名一致
} else if (rootName === projectName) {
  rootName = '.'
  next = inquirer.prompt([
    {
      name: 'buildInCurrent',
      message: '当前目录为空, 根目录名称和项目名称相同，是否直接在当前目录下创建新项目？',
      type: 'confirm',
      default: true,
    }
  ])
    .then(opt => {
      console.log(opt.buildInCurrent ? projectName : '.', 1)
      return Promise.resolve(opt.buildInCurrent ? projectName : '.')
    })
}
next
  .then(res => { console.log(res, 'res')
    res && go()
  })

function go () {
  next
    .then(projectRoot => {
      console.log(projectRoot, 'projectRoot')
      if (projectRoot !== '.') {
        fs.mkdirSync(projectRoot)
        download(projectRoot)
        .then(target => {
          return {
            projectRoot,
            downloadTemp: target
          }
        })
      }
    })
}
