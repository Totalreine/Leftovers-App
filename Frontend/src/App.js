import './App.css';
import NavigationBar from './components/NavigationBar'
import Home from './routes/Home';
import Login from './routes/Login';
import SignUp from './routes/SignUp';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    
    <Router>
      <NavigationBar/>  
          <Routes>
              <Route exact path='/'element= {<Home/>}/>
              <Route path='/signup' element={<SignUp/>} />
              <Route path='/login' element={<Login/>} />
          </Routes>
      </Router>

  );
}

export default App;
