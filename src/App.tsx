import React from 'react';
import './App.css';
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
