import React from 'react';
import Home from './component/home.js';
import Form from './component/form.js';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import logo from './asset/img/logo.png';
import matthew from './asset/img/matthew.jpg';
import './asset/css/main.css';

function App() {
  return (
    <div className = "App">
      <Form/>
      <Home/>
      <img src={logo} className="logo" alt="logoAlta" />
      <img src={matthew} className="profil" alt="matthew" />
    </div>
  );
}

export default App;