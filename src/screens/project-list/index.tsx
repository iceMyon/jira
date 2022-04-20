import React from "react";
import {SearchPanel} from "./SearchPanel";
import {List} from "./List";
import {useEffect, useState} from "react";
import qs from "qs";
import {cleanObject, useDebounce, useMount} from "../../utils";
import {useHttp} from "../../utils/http";


const apiUrl = process.env.REACT_APP_API_URL

export const ProjectListScreen = () => {
  const [users, setUsers] = useState([]);

  const [param, setParam] = useState({
    name: '',
    personId: ''
  });

  const debounceParam = useDebounce(param,2000)
  const [list, setList] = useState([]);
  const client = useHttp()

  useEffect(() => {
    client('projects',{data:cleanObject(debounceParam)}).then(setList)
  }, [debounceParam]);

  useMount(()=>{
    client('users').then(setUsers)
  })



  return <div>

    <SearchPanel param={param} setParam={setParam} users={users}/>
    <List list={list} users={users}/>
  </div>
}
