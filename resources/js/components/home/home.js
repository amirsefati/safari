import React from 'react'
import {Row , Col , Divider } from 'antd'
import {Carousel} from 'antd'
import './home.css'
import Slider1 from './../images/slider1.png'

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
                            <img src={Slider1} style={{width:"100%"}}/>
                        </div>
                        
                    </Carousel>
                </Col>

            </Row> 

            <Row>
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
            </Row>

            <Row className="first_event">
                <Col span={24}>
                    <h2>
                        اولین رویداد رسانه ای خروش
                    </h2>
                </Col>
            </Row>

            <Row className="graphic">
                <Col className="graphic_section_1" md={8} xs={24}>
                
                </Col>

                <Col className="graphic_section_2" md={8} xs={24}>
                
                </Col>

                <Col className="graphic_section_3" md={8} xs={24}>
                
                </Col>
            </Row>

            <Row className="main_idea">
                <Col span={24}>
                    <p>محور های اصلی</p>
                </Col>
            </Row>


            <Row>
                <Col md={12} className="teaser_congre">تیزر همایش</Col>
                <Col md={12} className="teaser_compet">تیزر مسابقه</Col>

            </Row>

        </div>
    )
}


export default Home;