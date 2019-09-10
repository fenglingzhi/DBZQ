module.exports = {
  lintOnSave: true,
  devServer: {
    port: 8003,
    proxy: {
      '/googlemap': {
        target: 'http://www.google.cn/maps',
        changeOrigin: true,
        pathRewrite: {
          '^/googlemap': ''
        }
      }
    }
  }
}