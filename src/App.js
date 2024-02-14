// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Menu from './components/Menu';
import Home from './components/Home';
import Cadastro from './components/Cadastro';
import Listagem from './components/Listagem';

function App() {
  return (
    <Router>
      <Menu />
      <Routes>
        <Route element={<Home />} path="/home" />
        <Route element={<Cadastro />} path="/cadastro" />
        <Route element={<Listagem />} path="/listagem" />
      </Routes>
    </Router>
  );
}

export default App;

