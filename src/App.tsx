import React from 'react';
import logo from './logo.svg';
import './App.css';
import User from './Component/User';

function App() {
  return (
    <div className="App">
      <h1>React Typescript App User Management System </h1>
    <User
       name = "Alif Sarker"
       age={32}
       isActive = {true}
       lang = {[" Bangla," , " English," , " Urdu"]}></User>
    </div>
  );
}

export default App;
