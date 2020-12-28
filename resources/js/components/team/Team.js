import React from 'react'
import {Row,Col} from 'antd'
import T1 from './../images/p (1).png'
import T2 from './../images/p (2).png'
import T3 from './../images/p (3).png'
import T4 from './../images/p (4).png'
import T5 from './../images/p (5).png'
import T6 from './../images/p (6).png'
import T7 from './../images/p (7).png'
import T8 from './../images/p (8).png'
import T9 from './../images/p (9).png'
import T10 from './../images/p (10).png'

import './team.css'
function Team(){
    return(
        <div>
            <Row style={{padding:"20px",background:"#F4F3EE",margin:"20px"}}>
                <Col>
                    <Row>
                        <p>شورای سیاستگذاری همایش</p>
                    </Row>
                
                <Row>
                <Col md={6}></Col>
                <Col md={4} xs={12} style={{padding:"10px",textAlign:"center"}}>
                    <img src={T5} style={{width:"100%"}}/>
                    <p className="name_team">علیرضا صفری</p>
                    <p className="desc_team">مدیر گروه سیاست خارجی اندیشکده امیرکبیر</p>
                </Col>

                <Col md={4} xs={12} style={{padding:"10px",textAlign:"center"}}>
                    <img src={T6} style={{width:"100%"}}/>
                    <p className="name_team">دکتر حبیب الله ظفریان</p>
                    <p className="desc_team">مدیر اندیشکده سیاست گذاری امیرکبیر</p>
                </Col>

                <Col md={4} xs={12} style={{padding:"10px",textAlign:"center"}}>
                    <img src={T3} style={{width:"100%"}}/>
                    <p className="name_team">امین نژاد مقدم</p>
                    <p className="desc_team">دبیرهمایش</p>
                </Col>
                </Row>
            </Col>

            </Row>
            <Row style={{padding:"20px",background:"#F4F3EE",margin:"20px"}}>
                <Col>
                    <Row>
                        <p>سخنرانان</p>
                    </Row>
                </Col>
                <Row>
                <Col md={8}></Col>
                <Col md={4} xs={12} style={{padding:"10px",textAlign:"center"}}>
                    <img src={T1} style={{width:"100%"}}/>
                    <p className="name_team">مهندس رستم قاسمی</p>
                    <p className="desc_team">وزیر سابق نفت</p>
                    <p className="desc_team"> فرمانده سابق قرارگاه سازندگی خاتم الانبیاء  </p>
                    <p className="desc_team"> دبیر سابق ستاد توسعه روابط اقتصادی ایران با عراق و سوریه </p>
                    <p className="desc_team">  </p>

                </Col>
                
                <Col md={4} xs={12} style={{padding:"10px",textAlign:"center"}}>
                    <img src={T7} style={{width:"100%"}}/>
                    <p className="name_team">دکتر حسین اکبری</p>
                    <p className="desc_team">سفیر سابق ایران در لیبی</p>
                </Col>
                </Row>
            </Row>

            <Row style={{padding:"20px",background:"#F4F3EE",margin:"20px"}}>
                <Col>
                    <Row>
                        <p>پنل تخصصی اخراج آمریکا از منطقه</p>
                    </Row>
                </Col>
                <Row>
                <Col md={2}></Col>
                <Col md={4} xs={12} style={{padding:"10px",textAlign:"center"}}>
                    <img src={T10} style={{width:"100%"}}/>
                    <p className="name_team">امیرمحمد مهرعلی</p>
                    <p className="desc_team">دبیر پنل تخصصی اخراج آمریکا از منطقه</p>
                </Col>

                <Col md={4} xs={12} style={{padding:"10px",textAlign:"center"}}>
                    <img src={T2} style={{width:"100%"}}/>
                    <p className="name_team">دکتر سید حمید حسینی</p>
                    <p className="desc_team">عضو هیئت مدیره اتاق بازرگانی ایران و عراق</p>
                </Col>

                <Col md={4} xs={12} style={{padding:"10px",textAlign:"center"}}>
                    <img src={T4} style={{width:"100%"}}/>
                    <p className="name_team">دکتر رضا محتشمی پور</p>
                    <p className="desc_team">کارشناس مسائل اقتصادی منطقه و قائم مقام بورس کالا</p>
                </Col>


                <Col md={4} xs={12} style={{padding:"10px",textAlign:"center"}}>
                    <img src={T8} style={{width:"100%"}}/>
                    <p className="name_team">دکتر غلامرضا انصاری</p>
                    <p className="desc_team">معاون سابق و مشاور وزیر امور خارجه در امور دیپلماسی اقتصادی</p>
                </Col>

                <Col md={4} xs={12} style={{padding:"10px",textAlign:"center"}}>
                    <img src={T9} style={{width:"100%"}}/>
                    <p className="name_team">دکتر علی فکری</p>
                    <p className="desc_team">رئیس اداره سیاست ها و برنامه های اقتصادی وزارت خارجه</p>
                </Col>
            </Row>
            </Row>
        </div>
    )
}

export default Team;