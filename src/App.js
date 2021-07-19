import React, { useState,useContext } from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import './App.css';

import Login from './Components/Login';
import Quiz from './Components/Quiz';



function App() {
  
  
  return (
   <Router>
    
    <Switch>
    <Route path='/' exact>
    <Login />
    </Route>
    <Route path='/Quiz/:id'>
    <Quiz />
    </Route>
  
    </Switch>
    
    </Router>
   
  );
}

export default App;
