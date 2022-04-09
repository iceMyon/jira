// 在真实环境中，如果使用firebase这种第三方auth服务的话，本文件不需要开发者开发
import {User} from "./screens/project-list/SearchPanel";

const apiUrl = process.env.REACT_APP_API_URL

const localStorageKey = '__auth__provider__token__'

export const getToken = () => window.localStorage.getItem(localStorageKey)

export const handleUserResponse = ({user}: { user: User }) => {
  window.localStorage.setItem(localStorageKey, user.token || "")
  return user
}

export const login = (data: { username: string, password: string }) => {
  return fetch(`${apiUrl}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }).then(async (response) => { //函数里面的内容是异步调用的，所以要用async，里面用await去接收
    if (response.ok) {
      return handleUserResponse(await response.json())
    }else{
      return Promise.reject(data)
    }
  })
}

export const register = (data: { username: string, password: string }) => {
   return fetch(`${apiUrl}/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }).then(async (response) => { //函数里面的内容是异步调用的，所以要用async，里面用await去接收
    if (response.ok) {
      return handleUserResponse(await response.json())
    }else{
      return Promise.reject(data)
    }
  })
}

export const logout =  async ()=>{
  window.localStorage.removeItem(localStorageKey)
}
