import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import SignUp from './components/SignUp';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
        <div>
          <h2>Welcome to React Router Tutorial</h2>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mr-auto">
            <li><Link to={'/'} className="nav-link"> Home </Link></li>
            <li><Link to={'/signup'} className="nav-link">Sign Up</Link></li>
            <li><Link to={'/login'} className="nav-link">Login</Link></li>
          </ul>
          </nav>
          <hr />
          <Routes>
              <Route exact path='/'element= {<Home/>}/>
              <Route path='/signup' element={<SignUp/>} />
              <Route path='/login' element={<Login/>} />
          </Routes>
        </div>
      </Router>

  );
}

export default App;
