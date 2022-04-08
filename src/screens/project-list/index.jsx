import React from "react";
import {SearchPanel} from "./SearchPanel";
import {List} from "./List";
import {useEffect, useState} from "react";
import qs from "qs";
import {cleanObject, useDebounce, useMount} from "../../utils";


const apiUrl = process.env.REACT_APP_API_URL

export const ProjectListScreen = () => {
  const [users, setUsers] = useState([]);
  
  const [param, setParam] = useState({
    name: '',
    personId: ''
  });
  
  const [list, setList] = useState([]);
  
  const debounceParam = useDebounce(param,2000)

  
  useEffect(() => {
    fetch(`${apiUrl}/projects?${qs.stringify(cleanObject(param))}`).then(async (response) => { //函数里面的内容是异步调用的，所以要用async，里面用await去接收
      if (response.ok) {
        setList(await response.json());  //这里这样就省去了一个 .then()的会回调去获取值
      }
    });
  }, [debounceParam]);
  
  useMount(()=>{
    fetch(`${apiUrl}/users`).then(async (response) => { //函数里面的内容是异步调用的，所以要用async，里面用await去接收
      if (response.ok) {
        setUsers(await response.json());
      }
    });
  })
  
  
  
  return <div>
    
    <SearchPanel param={param} setParam={setParam} users={users}/>
    <List list={list} users={users}/>
  </div>
}
