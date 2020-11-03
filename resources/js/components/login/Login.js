import React from 'react'
import './login.css'
import {Row , Col} from 'antd'
import {Input,Button} from 'antd'

function Login(){
   return(
        <div className="login_panel">
            <Row>
                <Col md={4} xs={1}></Col>
                <Col md={16} xs={22}>
                    <div className="login_layout">
                        <Row className="login_logo">
                            <Col span={24}>
                                لوگو
                            </Col>
                        </Row>

                        <Row className="login_text_under_logo">
                            <Col span={24}>
                                متن
                            </Col>
                        </Row>

                        <Row>
                            <Col md={6} xs={1}></Col>
                            <Col md={12} xs={20}>
                                <Input placeholder="ایمیل" />
                            </Col>
                        </Row>
                        <br/>
                        <Row>
                            <Col md={6} xs={1}></Col>
                            <Col md={12} xs={20}>
                            <Input.Password placeholder="گذرواژه" />

                            </Col>
                        </Row>

                        <br/>   

                        <Row className="login_btn_login">
                            <Col span={24}>
                                                            
                                <Button style={{padding:"5px 40px 5px 40px"}} type="primary" danger>
                                    ورود
                                </Button>
                                <span style={{padding:"5px"}}></span>
                                <Button style={{padding:"5px 30px 5px 30px"}} type="primary" >
                                    ثبت نام
                                </Button>
                            </Col>

                            
                        </Row>

                        <Row className="login_forget_password">
                            <Col span={24}>
                                <a>
                                <p style={{padding:"5px"}}>گذرواژه خود را فراموش کردم</p>
                                </a>
                            </Col>
                        </Row>


                    </div>
                </Col>
            </Row>
        </div>
   )
}


export default Login;