const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
  app.use(
    createProxyMiddleware('/dev', {
      target: 'https://blogs.zdldove.top/',
      changeOrigin: true,
      pathRewrite: {
        '^/dev': ''
      },
    }),
  )
  app.use(
    createProxyMiddleware('/kkk', {
      target: 'http://10.161.32.110:8080/',
      changeOrigin: true,
      pathRewrite: {
        '^/kkk': ''
      }
    }),
  )
  app.use(
    createProxyMiddleware('/node', {
      target: 'http://10.161.32.40:3000',
      changeOrigin: true,
      pathRewrite: {
        '^/node': ''
      }
    }),
  )
}


