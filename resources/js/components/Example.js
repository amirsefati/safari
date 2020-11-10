import React, { useState,useEffect } from 'react';
import ReactDOM from 'react-dom';
import {Link,Switch,Route, BrowserRouter as Router, Redirect, useHistory} from 'react-router-dom'
import Login from './login/Login';
import Signin from './signin/Signin';
import NavBar from './navbar/Navbar';
import Home from './home/home'
import Panel from './panel/Panel';
import About from './about/About';
import Intro from './intro/Intro';

import './example.css'
import Axios from 'axios'




function Example(){

  const [login,setLogin] = useState(0) 
  const [user,setuser] = useState(0) 

    useEffect(()=>{   
        checkuser()
    },[])

    function checkuser(){
      Axios.get('/apiv1/checklogin')
      .then(res =>{
          if(res.data['status'] === 200){
              setLogin(1)
              setuser(res.data['user']);
              console.log('check')
          }else{
            setLogin(0)

          }
      })
    }
  return (

    <div className="body_section" style={{direction:"rtl"}}>
      
     
      <Router>
      <div className="navbar_top">
        <NavBar login={login}/>
      </div>

        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route  path="/login" render={() => <Login check={checkuser}/>} ></Route>
          <Route  path="/signin" component={() => <Signin check={checkuser}/>}></Route>
          <Route  path="/panel" render={() => <Panel data={user} check={checkuser}/>}></Route>
          <Route  path="/about" component={About}></Route>
          <Route  path="/intro" component={Intro}></Route>

          
        </Switch>
      </Router>
    </div>
    
  );
}

export default Example;


if (document.getElementById('app')) {
    ReactDOM.render(<Example />, document.getElementById('app'));
}
