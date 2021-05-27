import React from 'react';
import './App.css';
import {BrowserRouter as Router } from 'react-router-dom';
import NavBar from './Components/Navbar';


function App() {
  return (
    <Router>
      <NavBar/>
    </Router>
  );
}

export default App;
