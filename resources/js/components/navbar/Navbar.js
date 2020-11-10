import React from 'react'
import './Navbar.css'
import {Link,Switch,Route, BrowserRouter as Router} from 'react-router-dom'

function toggle_slider(){
    var x = document.getElementById("top_nav_id")
    if(x.className === "top_nav"){
        x.className += " responsive"
    }else{
        x.className = "top_nav"
    }
}


function NavBar(props){ 
    
    return(
        <div className="top_nav" id="top_nav_id">

            <Link to="/" className="top_nav_a"> صفحه اصلی </Link>
            <Link to="/intro" className="top_nav_a">  معرفی رویداد  </Link>
            <Link to="/" className="top_nav_a"> کادر همایش </Link>
            
            {props.login ? 
            <Link to="/panel" className="top_nav_a"> پنل داشبورد </Link>
            :
            <Link to="/Login" className="top_nav_a"> ورود </Link>
            }


            <Link to="/about" className="top_nav_a"> ارتباط با ما </Link>

            <span id="toggle_slider"  className="top_nav_icon_mobile">
                <a onClick={toggle_slider}>
                    منو
                </a>
            </span>
        </div>
    )
}


export default NavBar;