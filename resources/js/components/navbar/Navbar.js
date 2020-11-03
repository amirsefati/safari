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


function NavBar(){
    return(
        <div className="top_nav" id="top_nav_id">
            <Link to="/" className="top_nav_a"> صفحه اصلی </Link>
            <Link to="/" className="top_nav_a"> درباره همایش </Link>
            <Link to="/" className="top_nav_a"> کادر همایش </Link>
            <Link to="/Login" className="top_nav_a"> ورود </Link>
            <Link to="/About" className="top_nav_a"> ارتباط با ما </Link>
            <span id="toggle_slider"  className="top_nav_icon_mobile">
                <a onClick={toggle_slider}>
                    منو
                </a>
            </span>
        </div>
    )
}


export default NavBar;