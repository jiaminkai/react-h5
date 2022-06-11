import axios from 'axios'
import qs from 'qs'
import {  Toast } from 'antd-mobile'
const service = axios
// 请求拦截器
service.interceptors.request.use(config => {
  let token = localStorage.getItem("x-auth-token");
    if (token) {
      config.headers = {
        "x-auth-token": token
      }
    }
  config.paramsSerializer = p => {
    return qs.stringify(p, { arrayFormat: 'repeat', allowDots: true })
  }
  return config
})
// 响应拦截器
service.interceptors.response.use(
  response => {
    
    const { statusText, status } = response
    // 判断返回数据状态是否为true
    if (status && status === 200) return response
    else {
      Toast.show({
        content: statusText,
        maskClickable: false,
      })
      return Promise.reject(new Error(statusText))
    }
  },
  error => {
    if (error.response.status === 400) {
      if(error.response.data.code === 4003) {
        let message = 'Excel导入错误明细!'
        Object.entries(error.response.data.error).forEach((entry, index) => {
          const errorMessage ='权限不足'
          const errorRow = entry[1].toString()
          message = message + '<br />' + (index + 1) + '. ' + errorMessage + ', '  + ': ' + errorRow
        })
        Toast.show({
          content: message,
          maskClickable: false,
        })
      } else {
        Toast.show({
          content: '操作失败',
          maskClickable: false,
        })
      }
    } else if (error.response.status === 401) {
      Toast.show({
        content: '权限不足',
        maskClickable: false,
      })
    } else if(error.response.status === 403) {
      Toast.show({
        content: '没有当前权限,拒绝访问!',
        maskClickable: false,
      })
    } else {
      Toast.show({
        content: '服务器错误!',
        maskClickable: false,
      })
    }
    return Promise.reject(error)
  }
)

export default service
