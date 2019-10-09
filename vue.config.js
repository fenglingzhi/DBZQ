module.exports = {
  lintOnSave: true,
  devServer: {
    // port: 8004,
    port: 8089,
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
        // target: 'http://47.111.29.26:8000',
        // target: 'http://192.168.199.217:8000' ,
        target: 'http://localhost:8000',
        changeOrigin: true
      },
      '/graphql': {
        // target: 'http://47.111.29.26:8000',
        // target: 'http://192.168.199.217:8000',
        target: 'http://localhost:8000',
        changeOrigin: true
      }
    }
  }
}
