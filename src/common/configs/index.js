// import PAGE_CONFIG from 'common/configs/app.router'
import { apiEndPoint } from './app.endpoint'

function appSettings() {
  // window.globalData = window.globalData || {}
  // window.globalData.appSettings = window.globalData.appSettings || {}
  // /**
  //  * @type {{[x:string]:any}}
  //  */
  // const configGlobal = window.globalData.appSettings

  const config = {
    urlAPI: process.env.NEXT_PUBLIC_API_HOST
  }
  const api = {
    ...apiEndPoint(config.urlAPI)
  }
  return { config, api }
}

const { api, config } = appSettings()

export { api, config }
