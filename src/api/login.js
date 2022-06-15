import axios from '../utils/request'

// token跳转登陆
export function loginByAccessToken(token) {
    return axios({
      method: 'post',
      url: '/v1/api/auth/login-issue-token',
      data: { token }
    })
  }
  // 获取临时token
  export function getAccessToken() {
    return axios({
      method: 'post',
      url: '/v1/api/auth/generate-issue-token'
    })
  }
  export function login (userInfo) {
    console.log('userInfo: ', userInfo);
    return axios.post('/api/1024/login', userInfo)
  }