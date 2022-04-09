import React from "react";
import {ProjectListScreen} from "./screens/project-list";
import {useAuth} from "./context/auth-context";

export const AutheticatedApp = ()=>{
  const {logout} = useAuth()
  return <div>
    <button onClick = {logout}>登出</button>
    <ProjectListScreen/>
  </div>
}
