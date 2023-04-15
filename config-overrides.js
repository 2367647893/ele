const modifyVars = require('./src/utils/antd')
const {
  addWebpackAlias, // 别名
  addLessLoader, // 加载 less sass
  fixBabelImports, // 按需加载 antd
  override,
  addPostcssPlugins,
  addDecoratorsLegacy,  // 支持 修饰器
} = require('customize-cra')
const path = require('path')

process.env.GENERATE_SOURCEMAP = true

module.exports = override(
  // @ 修饰器
  addDecoratorsLegacy(),
  fixBabelImports('import', {
    libraryName: 'antd-mobile',
    libraryDirectory: 'es',
    // 支持 less sass stylus
    style: true,
  }),
  // 支持 antd 主题定制
  addLessLoader({
    javascriptEnabled: true,
    // modifyVars,
  }),
  // 别名
  addWebpackAlias({
    '@': path.resolve(__dirname, 'src'),
    '@@': path.resolve(__dirname, 'src/components'),
  }),
  addPostcssPlugins([require('postcss-pxtorem')({
    propList: ['*']
  }),])
)
