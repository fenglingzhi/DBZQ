import { mock } from 'mockjs'
import Axios from 'axios'
const MOCK_PREFIX = '/itsfake'

Axios.interceptors.response.use(res => Promise.resolve(res), error => {
  let { response: { config } } = error
  if (!config.url.startsWith(MOCK_PREFIX)) {
    return Axios({ ...config, url: MOCK_PREFIX + config.url })
  }
  return Promise.reject(error)
})
const mockers = {}
const req = require.context(__dirname, false, /^((?!index).)*\.js$/)
req.keys().forEach(key => Object.assign(mockers, req(key).default))
Object.keys(mockers).forEach(k => mock(RegExp(MOCK_PREFIX + k), mockers[k]))
