import React from 'react'
import './Navbar.css'
import {Link,Switch,Route, BrowserRouter as Router} from 'react-router-dom'
import Logo from './../images/logo_menu.png'
import Menu_icon from './../images/menumobile.png'

function toggle_slider(){
    var x = document.getElementById("top_nav_id")
    if(x.className === "top_nav"){
        x.className += " responsive"
    }else{
        x.className = "top_nav"
    }
}
function close_menu(){
    var x = document.getElementById("top_nav_id")
    x.className = "top_nav"

}

function NavBar(props){ 
    
    return(
        <div className="top_nav" id="top_nav_id">

            <Link to="/" className="top_nav_a" onClick={close_menu}> صفحه اصلی </Link>
            <Link to="/intro" className="top_nav_a" onClick={close_menu}>  معرفی همایش  </Link>
            <Link to="/team" className="top_nav_a" onClick={close_menu}> کادر همایش </Link>
            
            {props.login ? 
            <Link to="/panel/news" className="top_nav_a" onClick={close_menu}> پرتال  </Link>
            :
            <Link to="/Login" className="top_nav_a" onClick={close_menu}> ورود </Link>
            }


            <Link to="/about" className="top_nav_a" onClick={close_menu}> ارتباط با ما </Link>



            <span id="toggle_slider"  className="top_nav_icon_mobile">
                <a onClick={toggle_slider}>
                    <img src={Logo} style={{width:"80px"}}/>
                </a>
            </span>

            <span id="toggle_slider"  className="top_nav_icon_mobile_2">
                <a onClick={toggle_slider}>
                    <img src={Menu_icon} style={{width:"40px"}}/>
                </a>
            </span>

            <div className="logoin_md">
                <img src={Logo} style={{width:"100px"}}/>
            </div>
        </div>
    )
}


export default NavBar;