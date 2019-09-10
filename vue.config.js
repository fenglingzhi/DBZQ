module.exports = {
  lintOnSave: true,
  devServer: {
    port: 8003,
    proxy: {
      '/maptiles': {
        target: 'http://www.google.cn/maps',
        changeOrigin: true,
        pathRewrite: {
          '^/maptiles': ''
        }
      }
    }
  }
}