import React from 'react'
import {Row , Col , Divider } from 'antd'
import {Carousel} from 'antd'
import './home.css'
import Slider1 from './../images/slider1.png'
import Slider2 from './../images/silder2.png'

import Video from './../images/video.png'
import Graphic from './../images/graphic.png'
import Text from './../images/text.png'
import Vip from './../images/vip.png'

import Schedule from './../images/mehvarha.jpg'
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
                            <img src={Slider1} style={{width:"100%"}} alt="کنگره خروج آمریکا از منطقه"/>
                        </div>
                        <div style={contentStyle}>
                            <img src={Slider2} style={{width:"100%"}} alt="کنگره خروج آمریکا از منطقه"/>
                        </div>
                    </Carousel>
                </Col>

            </Row> 

           
            <br/>
            <Row className="graphic">

                <Col md={6} xs={12}>
                    <div className="graphic_section_1">
                    <img src={Vip} style={{width:"100%",borderRadius:"20px"}} alt="خروش کنگره خروج آمریکا از منطقه"/>
                    </div>
                </Col>

                <Col md={6} xs={12}>
                    <div className="graphic_section_1">
                    <img src={Text} style={{width:"100%",borderRadius:"20px"}} alt="خروش کنگره خروج آمریکا از منطقه"/>
                    </div>
                </Col>

                <Col md={6} xs={12}>
                    <div className="graphic_section_1">
                    <img src={Graphic} style={{width:"100%",borderRadius:"20px"}} alt="خروش کنگره خروج آمریکا از منطقه"/>
                    </div>
                </Col>

                <Col md={6} xs={12}>
                    <div className="graphic_section_1">
                    <img src={Video} style={{width:"100%",borderRadius:"20px"}} alt="خروش کنگره خروج آمریکا از منطقه"/>
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

            <Row>
                <Col md={12} xs={24} className="teaser_congre">
                    <img src={Schedule} style={{width:"100%"}} alt="خروش کنگره خروج آمریکا از منطقه محور ها"/>
                </Col>
                <Col md={12} xs={24} className="teaser_compet"> 

                <img src={Schedule2} style={{width:"100%"}} alt="خروش کنگره خروج آمریکا از منطقه ارسال آثار"/>


                </Col>

            </Row>
           
        </div>
    )
}


export default Home;