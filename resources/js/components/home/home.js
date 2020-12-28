import React from 'react'
import {Row , Col , Divider } from 'antd'

import './home.css'
import Flag from '../images/flag.png'
import Img1 from '../images/1.png'
import Img3 from '../images/2.png'
import Img2 from '../images/3.png'
import Tablo from '../images/tablo.png'

import {Link} from 'react-router-dom'


function Home(){
    return(
        <div className="main_bg">
        <img src={Img1} className="main_img1"/>           
        <img src={Img2} className="main_img2"/>           
        <img src={Img3} className="main_img3"/>  
        <Link to="/login"> 
         
        <img src={Tablo} className="main_tablo"/>           
        </Link>

        <img src={Flag} className="main_flag"/>    
       
        </div>
    )
}


export default Home;