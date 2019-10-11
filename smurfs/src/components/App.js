import React, { Component } from "react";
import "./App.css";
import SmurfForm  from './SmurfForm';
import Members from './Members';


const App = () =>{
  
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <SmurfForm />
        <Members />
      </div>
    );
  }


export default App;
