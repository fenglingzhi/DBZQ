// npm run serve --proxy=192.168.199.217
// npm run serve --proxy=localhost
let defaultProxyHost = '58.213.124.45'
let npmArgv = JSON.parse(process.env.npm_config_argv).cooked
let pid = npmArgv.indexOf('--proxy')
if(~pid) defaultProxyHost = npmArgv[pid+1]

console.log(defaultProxyHost)
module.exports = {
  lintOnSave: true,
  devServer: {
    port: 8089,
    proxy: {
      '/maptiles': {
        target: `http://${defaultProxyHost}:60010`,
        changeOrigin: true
      },
      '/graphql': {
        target: `http://${defaultProxyHost}:60010`,
        changeOrigin: true
      },
      '/api': {
        target: `http://58.213.124.45:50001`,
        changeOrigin: true
      },
      '/Help': {
        target: `http://58.213.124.45:50001`,
        changeOrigin: true
      },
    }
  }
}
