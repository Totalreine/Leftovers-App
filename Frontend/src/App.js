import './App.css';
import NavigationBar from './components/NavigationBar'
import Home from './components/Home';
import Login from './components/Login';
import SignUp from './components/SignUp';
import MyRecipes from './components/MyRecipes';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (

    <Router>
      <NavigationBar />
      <Routes>
        <Route exact path='/' element={<SignUp />} />
        <Route path='/home' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/myrecipes' element={<MyRecipes />} />
      </Routes>
    </Router>

  );
}

export default App;
