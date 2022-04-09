import React from 'react';
import logo from './logo.svg';
import './App.css';
import {ProjectListScreen} from "./screens/project-list";
import {LoginScreen} from "./unautheticated-app/login"
import { useAuth } from 'context/auth-context';
import {AutheticatedApp} from "./autheticated-app";
import {UnautheticatedApp} from "./unautheticated-app";



function App() {
  const {user} = useAuth()
  return (
    <div className="App">
      {user? <AutheticatedApp/>:<UnautheticatedApp/>}
    </div>
  );
}

export default App;
