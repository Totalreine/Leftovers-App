import './App.css';
import NavigationBar from './components/NavigationBar'
import Home from './components/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import MyRecipes from './pages/MyRecipes';
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
