import React from 'react'
import {Row , Col , Divider } from 'antd'
import {Carousel} from 'antd'
import './home.css'
import Slider1 from './../images/slider1.png'
import Banner1 from './../images/banner_1.png'
import Poster from './../images/poster.png'
import Media from './../images/media.png'
import Text from './../images/text.png'
import Schedule from './../images/schadule.png'
import {
    ContainerOutlined,
    CloudUploadOutlined,
    CheckCircleOutlined,
  } from '@ant-design/icons';
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
                       
                        
                    </Carousel>
                </Col>

            </Row> 

            {/* <Row>
                <Col span={24} className="row_1">
                    <h2>
                        اولین همایش تخصصی اخراج آمریکا از منطقه
                    </h2>
                    <p>مجموعه آمفی تئاتر های دانشگاه صنعتی امیرکبیر</p>
                </Col>
            </Row>
            <Row className="row_1_section_2">

            </Row>

            <Row className="panel_name">
                <Col className="panel_name_section_1" md={8} xs={24}>
                
                </Col>

                <Col className="panel_name_section_2" md={8} xs={24}>
                
                </Col>

                <Col className="panel_name_section_3" md={8} xs={24}>
                
                </Col>
            </Row> */}

            <Row className="first_event">
                <Col span={24}>
                    <img src={Banner1} className="home_banner_2"/>

                </Col>
            </Row>
            <br/>
            <Row className="graphic">
                <Col md={3} xs={0}></Col>
                <Col className="graphic_section_1" md={6} xs={24}>
                    <img src={Poster} style={{width:"140px"}}/>
                    <div style={{padding:"10px"}}/>
                    <p style={{fontSize:"16px"}}>ارسال اثر نوشتاری</p>
                    <p style={{fontSize:"12px",color:"gray"}}>یادداشت تخصصی</p>

                </Col>

                <Col className="graphic_section_2" md={6} xs={24}>
                    <img src={Media} style={{width:"140px"}}/>
                    <div style={{padding:"10px"}}/>
                    <p style={{fontSize:"16px"}}>ارسال اثر گرافیکی </p>
                    <p style={{fontSize:"12px",color:"gray"}}>پوستر و عکس نوشت</p>

                </Col>

                <Col className="graphic_section_3" md={6} xs={24}>
                    <img src={Text} style={{width:"140px"}}/>
                    <div style={{padding:"10px"}}/>
                    <p style={{fontSize:"16px"}}>ارسال اثر ویدئویی</p>
                    <p style={{fontSize:"12px",color:"gray"}}>موشن گرافیک، کلیپ کوتاه،فیلم کوتاه</p>

                </Col>
            </Row>

            {/* <Row className="main_idea">
                <Col span={24}>
                    <p>محور های اصلی</p>
                </Col>
            </Row> */}
            <br/>
            <br/>
            <br/>
            <br/>

            <Row>
                <Col md={12} xs={24} className="teaser_congre">
                    <img src={Schedule} style={{width:"100%",borderRadius:"20px 0px 0px 20px"}}/>
                </Col>
                <Col md={12} xs={24} className="teaser_compet"> 

                        <p style={{fontSize:"18px",fontWeight:'bold'}}>
                        شرکت در رویداد تخصصی اخراج آمریکا از منطقه
                        </p>
                        <br/>
                {/* <Row>
                    <Col md={5} xs={1}></Col>

                    <Col md={15} xs={20}>
                    <div style={{textAlign:"right"}}>
                        <p><ContainerOutlined style={{fontSize:"22px"}}/><span style={{padding:"5px"}}></span>ثبت نام در سایت</p>
                        <p><CloudUploadOutlined style={{fontSize:"22px"}}/><span style={{padding:"5px"}}></span>ارسال اثر</p>
                        <p><CheckCircleOutlined style={{fontSize:"22px"}}/><span style={{padding:"5px"}}></span>تایید نهایی</p>
                    </div>
                </Col>
                </Row> */}

                </Col>

            </Row>
            
            <br/>
            <br/>
            <br/>
            <br/>
        </div>
    )
}


export default Home;