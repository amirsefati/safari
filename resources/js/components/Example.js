import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Link,Switch,Route, BrowserRouter as Router} from 'react-router-dom'
import Login from './login/Login';
import Signup from './Signup';
import NavBar from './navbar/Navbar';
import Home from './home/home'
import './example.css'

function Example(){
  
  return (

    <div className="body_section" style={{direction:"rtl"}}>
      
     
      <Router>
      <div className="navbar_top">
        <NavBar/>
      </div>

        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route  path="/login" component={Login}></Route>
          <Route  path="/signup" component={Signup}></Route>

        </Switch>
      </Router>
    </div>
    
  );
}

export default Example;


if (document.getElementById('app')) {
    ReactDOM.render(<Example />, document.getElementById('app'));
}
