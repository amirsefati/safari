import React from 'react'
import {Row , Col , Divider } from 'antd'
import {Carousel} from 'antd'
import './home.css'
import Slider1 from './../images/slider1.png'
import Slider2 from './../images/silder2.png'

import Poster from './../images/poster.png'
import Media from './../images/media.png'
import Text from './../images/text.png'
import Schedule from './../images/schadule.png'
import Schedule2 from './../images/aaa.jpg'


import {
    SendOutlined,
    ContainerOutlined,
    CloudUploadOutlined,
    CheckCircleOutlined
  } from '@ant-design/icons';

import {Link} from 'react-router-dom'


const contentStyle = {
    height: 'auto',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };

function Home(){
    return(
        <div>
            <Row>
                <Col span={24}>
                    <Carousel autoplay>
                        <div style={contentStyle}>
                            <img src={Slider1} style={{width:"100%"}}/>
                        </div>
                        <div style={contentStyle}>
                            <img src={Slider2} style={{width:"100%"}}/>
                        </div>
                    </Carousel>
                </Col>

            </Row> 

           
            <br/>
            <Row className="graphic">
                <Col md={3} xs={0}></Col>
                <Col style={{padding:"15px"}}  md={6} xs={24}>
                    <div className="graphic_section_1">
                    <img src={Text} style={{width:"140px"}}/>
                    <div style={{padding:"10px"}}/>
                    <p style={{fontSize:"16px"}}> اثر نوشتاری</p>
                    <p style={{fontSize:"12px",color:"gray"}}>یادداشت تخصصی</p>
                    </div>
                </Col>
                <span style={{padding:"5px"}}/>
                <Col style={{padding:"15px"}} md={6} xs={24}>
                    <div className="graphic_section_2">
                    <img src={Poster} style={{width:"140px"}}/>
                    <div style={{padding:"10px"}}/>
                    <p style={{fontSize:"16px"}}> اثر گرافیکی </p>
                    <p style={{fontSize:"12px",color:"gray"}}>پوستر و عکس نوشت</p>
                    </div>
                </Col>
                <span style={{padding:"5px"}}/>

                <Col style={{padding:"15px"}} md={6} xs={24}>
                    <div className="graphic_section_3">
                    <img src={Media} style={{width:"140px"}}/>
                    <div style={{padding:"10px"}}/>
                    <p style={{fontSize:"16px"}}> اثر ویدئویی</p>
                    <p style={{fontSize:"12px",color:"gray"}}>موشن گرافیک، کلیپ کوتاه،فیلم کوتاه</p>
                    </div>
                </Col>
            </Row>
            <br/>
            <br/>

            <Row >
                <Col md={4} xs={2}></Col>
                <Col md={16} xs={20} className="main_idea">
                    <Link to="login" style={{color:"black"}}>
                    <p style={{fontSize:"22px"}}>
                    <SendOutlined />
                    <span style={{padding:"5px"}}/>
                    ارسال اثر
                    </p>
                    <p>برای ارسال ایده های خود ابتدا وارد سایت شوید</p>
                    </Link>
                </Col>
            </Row>

            <br/>
            <br/>
            <br/>

            <Row>
                <Col md={12} xs={24} className="teaser_congre">
                    <img src={Schedule} style={{width:"100%"}}/>
                </Col>
                <Col md={12} xs={24} className="teaser_compet"> 

                <img src={Schedule2} style={{width:"100%"}}/>


                </Col>

            </Row>
           
        </div>
    )
}


export default Home;