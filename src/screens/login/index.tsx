import React, {FormEvent} from "react";
import qs from "qs";
import {cleanObject} from "../../utils";

export const LoginScreen = () => {

  const apiUrl = process.env.REACT_APP_API_URL
  const login = (param: { username: string, password: string }) => {
    fetch(`${apiUrl}/login`, {
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(param)
    }).then(async (response) => { //函数里面的内容是异步调用的，所以要用async，里面用await去接收
      if (response.ok) {

      }
    });
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const username = (event.currentTarget.elements[0] as HTMLInputElement).value
    const password = (event.currentTarget.elements[1] as HTMLInputElement).value
    login({username,password})
  }
  return <form onSubmit={handleSubmit}>
    <div>
      <label htmlFor="username">用户名</label>
      <input type="text" name="username"/>
    </div>
    <div>
      <label htmlFor="password">密码</label>
      <input type="password" id={'password'}/>
    </div>
    <button type={"submit"}>登录</button>
  </form>
}
