module.exports = {
  lintOnSave: true,
  devServer: {
    port: 8003,
    proxy: {
      /* '/maptiles': {
        target: 'http://www.google.cn/maps',
        changeOrigin: true,
        pathRewrite: {
          '^/maptiles': ''
        }
      },
      '/graphql': {
        target: 'http://localhost:8000',
        changeOrigin: true
      } */
      '/maptiles': {
        target: 'http://47.111.29.26:8000',
        changeOrigin: true
      },
      '/graphql': {
        target: 'http://47.111.29.26:8000',
        changeOrigin: true
      }
    }
  }
}