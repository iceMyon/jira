import React, {FormEvent} from "react";
import qs from "qs";
import {cleanObject} from "../utils";
import {useAuth} from "../context/auth-context";
import {Button, Form, Input} from "antd";
import {LongButton} from "./index";

export const RegisterScreen = () => {

  const apiUrl = process.env.REACT_APP_API_URL

  const {register, user} = useAuth()
  // const login = (param: { username: string, password: string }) => {
  //   fetch(`${apiUrl}/login`, {
  //
  //     method:'POST',
  //     headers:{
  //       'Content-Type':'application/json'
  //     },
  //     body:JSON.stringify(param)
  //   }).then(async (response) => { //函数里面的内容是异步调用的，所以要用async，里面用await去接收
  //     if (response.ok) {
  //
  //     }
  //   });
  // }

  const handleSubmit = (values:{username: string, password: string}) => {
    register(values)
  }
  return <Form onFinish={handleSubmit}>
    <Form.Item name={'username'} rules={[{required: true, message: '请输入用户名'}]}>
      <Input placeholder="用户名" type="text" id="username"/>
    </Form.Item>
    <Form.Item name={'password'} rules={[{required: true, message: '请输入密码'}]}>
      <Input placeholder="密码" type="password" id='password'/>
    </Form.Item>
    <Form.Item>
      <LongButton htmlType={'submit'} type={"primary"}>注册</LongButton>
    </Form.Item>
  </Form>
}
