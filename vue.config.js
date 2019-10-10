// npm run serve --proxy=192.168.199.217
// npm run serve --proxy=ocalhost
let defaultProxyHost = '47.111.29.26'
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
        target: `http://${defaultProxyHost}:8000`,
        changeOrigin: true
      },
      '/graphql': {
        target: `http://${defaultProxyHost}:8000`,
        changeOrigin: true
      }
    }
  }
}
