import axios from 'axios'
import _ from 'lodash'


const errorHandler = error => {
  const { response } = error

  if (response && response.status) {
    
    // console.log(codeMessage[response.status] || response.statusText)
    // QMessage.error(codeMessage[response.status] || response.statusText)
  } else if (!response) {
    // QMessage.error('网络异常无法连接到服务器')
    // console.log('网络异常无法连接到服务器')
  }

  return response
}

let cancelToken = axios.CancelToken

const cancel = []

const removePending = config => {
  for(let p in cancel){
    if (cancel[p].u === config.url) {
      cancel[p].f()
    }
  }
}

// 请求拦截器 发送一个请求之前
axios.interceptors.request.use(config => {
  //在一个ajax发送前执行一下取消操作
  removePending(config)
  config.cancelToken = new cancelToken(c => {
    cancel.push({
      f: c,
      u: config.url,
    })
  })

  // 添加 headers token
  // 这块拿不到 dva
  const token = localStorage.getItem('token')

  if (token) {
    config.headers['Authori-zation'] = `Bearer ${token}`
  }
  return config

}, error => {
  return Promise.reject(error)
})

// 响应拦截器
axios.interceptors.response.use(response => {
  return response

}, error => {
  errorHandler(error)
})

function processingData (response) {
  const data = _.get(response, 'data', null)

  if (!_.get(data, 'errno', '')) {
    return data

  } else {
    return {}
  }
}

// 上传
async function uploadPost (url, payload = {}, other = {}) {
  const response = await axios({
    method: 'post',
    url,
    data: payload,
    baseURL: '/dev', // 公共路径
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    ...other,
  })
    .catch(err => console.log(err))

  return processingData(response)
}

// url 是请求的服务器地址
// payload 参数
// other 其他参数 headers 等
async function post (url, payload = {}, other = {}) {
  const response = await axios({
    method: 'post',
    url,
    baseURL: '/dev', // 公共路径
    data: { ...payload },
  })
    .catch(err => console.log(err))

  return processingData(response)
}

async function get (url, payload = {}, other = {}) {
  const response = await axios({
    method: 'get',
    baseURL: '/dev', // 公共路径
    url,
    params: { ...payload },
    ...other,
  })
    .catch(err => console.log(err))
  
  return processingData(response)
}

async function put (url, payload = {}, other = {}) {
  const response = await axios({
    method: 'put',
    url,
    baseURL: '/dev', // 公共路径
    data: { ...payload },
    ...other,
  })
    .catch(err => console.log(err))
  
  return processingData(response)
}

async function del (url, payload = {}, other = {}) {
  const response = await axios({
    method: 'delete',
    baseURL: '/dev', // 公共路径
    url,
    params: { ...payload },
    ...other,
  })
    .catch(err => console.log(err))
  
  return processingData(response)
}

export default {
  post,
  get,
  put,
  del,
  uploadPost,
}
