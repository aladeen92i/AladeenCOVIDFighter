import React from 'react';
import RegisterPage from './pages/RegisterPage';
import NavbarPage from './pages/NavbarPage';
import HomePage from './pages/HomePage';

import { MDBContainer } from 'mdbreact';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
        <NavbarPage />
        <HomePage />
    </div>
  );
}

export default App;
