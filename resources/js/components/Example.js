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
import {Row,Col} from 'antd'
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

      <div className="footer">
        <Row>
          <Col md={3}></Col>
          <Col md={6} xs={24} style={{padding:"15px"}}>
            <p style={{color:"white"}}>اطلاعات تماس</p> 
            <hr className="hr_style"/>
            <div style={{padding:"5px"}}></div>
            <p style={{color:"white"}}>شماره تماس : 64545195</p>
            <p style={{color:"white"}}>ایمیل: info@amtt.ir</p>
            <p style={{color:"white"}}>کد پستی: 1591634764</p>
            <p style={{color:"white"}}>فکس: 43850119 به آدرس: fax.ir ، نام کاربری: pishvah@gmail.com و رمز: 124578</p>
          </Col>

          <Col md={6} xs={24} style={{padding:"15px"}}>
            <p style={{color:"white"}}> آدرس</p> 
            <hr className="hr_style"/>
            <div style={{padding:"5px"}}></div>
            <p style={{color:"white"}}>تهران منطقه 6، خ انقلاب اسلامی، خ حافظ، ک البرز 1، پ 22، ط 1، واحد 2</p>
            <p style={{color:"white"}}>واحد پشتیبانی تلگرام و بله: @amtt_admin</p>
          </Col>

          <Col md={6} xs={24} style={{padding:"15px"}}>
            <p style={{color:"white"}}> پیوند ها</p> 
            <hr className="hr_style"/>
            <div style={{padding:"5px"}}></div>
            <p ><a style={{color:"white"}} href="https://aut.ac.ir">دانشگاه امیرکبیر</a></p>
            <p ><a style={{color:"white"}} href="http://amtt.ir">اندیشکده</a></p>

          </Col>
        </Row>
      </div>
    </div>
    
  );
}

export default Example;


if (document.getElementById('app')) {
    ReactDOM.render(<Example />, document.getElementById('app'));
}
