import { AxiosRequestConfig  } from './types'
import { transformRequest } from './helpers/data'
import { buildURL } from './helpers/url'
import { processHeaders } from './helpers/headers'
import xhr from './xhr'

function axios(config: AxiosRequestConfig) : void{
  processConfig(config)
  xhr(config)
}

function processConfig (config: AxiosRequestConfig): void {
  config.url = transformUrl(config)
  config.headers = transformHeaders(config)
  config.data = transformRequestData(config)
}

function transformHeaders (config: AxiosRequestConfig) {
  const { headers = {}, data } = config
  return processHeaders(headers, data)
}
function transformUrl(config: AxiosRequestConfig): string{
  const { url, params } = config
  return buildURL(url, params)
}

function transformRequestData (config: AxiosRequestConfig): any {
  return transformRequest(config.data)
}

export default axios
