import React from 'react'
import './login.css'
import {Row , Col} from 'antd'
import { Form, Input, Button, Checkbox,notification } from 'antd';
import Axios from 'axios';
import {Link, useHistory} from 'react-router-dom'
import Logo from './../images/logo_safari.png'


const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 18 },
  };

const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};

const tailLayout1 = {
    wrapperCol: { offset: 0, span: 24 },
};
  
const Login = (props) => {
    const History = useHistory()
    const onFinish = values => {
      Axios.post('/apiv1/loginform',{
          data : values
      }).then(res => {
          if(res.data === 'ok'){
            props.check('HAHA')
            notification.open({
                message:'ورود به سامانه',
                description:'ورود به سامانه با موفقیت انجام شد'
              });
            History.push('panel')
        }else{
            notification.open({
                message:'خطا',
                description:'اطلاعات ورود صحیح نیست'
              });
        }
      })
    };
  
    const onFinishFailed = errorInfo => {
      console.log('Failed:', errorInfo);
    };
  
   return(
        <div className="login_panel">
            <Row>
                <Col md={4} xs={1}></Col>
                <Col md={16} xs={22}>
                    <div className="login_layout">
                        <Row className="login_logo">
                            <Col span={24}>

                                <img style={{margin:"20px",width:"250px"}} src={Logo}/>
                            </Col>
                        </Row>

                        <Row className="login_text_under_logo">
                            <Col span={24}>
                                <p style={{fontSize:"12px"}}>برای ورود لطفا ایمیل و گذرواژه خود را وارد کنید</p>
                            </Col>
                        </Row>
                        <br/>
                        <Row className="login_login">
                            <Col md={8} xs={1}></Col>
                            <Col md={8} xs={22}>
                            <Form
                                {...layout}
                                name="basic"
                                initialValues={{ remember: true }}
                                onFinish={onFinish}
                                onFinishFailed={onFinishFailed}
                                className="login_form"
                                >
                                <Form.Item
                                    label="ایمیل"
                                    name="username"
                                    rules={[
                                        { required: true, message: 'لطفا ایمیل خود را وارد کنید' },
                                        { type: 'email',message: 'لطفا ایمیل خود را به شکل صحیح وارد کنید'}]}
                                >
                                    <Input />
                                </Form.Item>

                                <Form.Item
                                    label="گذرواژه"
                                    name="password"
                                    rules={[{ required: true, message: 'لطفا گذرواژه خود را وارد کنید' } ]}
                                >
                                    <Input.Password />
                                </Form.Item>

                                <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                                    <Checkbox>مرا به خاطر بسپار</Checkbox>
                                </Form.Item>

                                <Form.Item {...tailLayout1}>
                                    <Button style={{padding:"5px 40px"}} type="primary" htmlType="submit">
                                    ورود
                                    </Button>
                                    <span style={{padding:"10px"}}/>
                                    <Link to="/signin">
                                        <Button type="danger">
                                        ثبت نام
                                        </Button>
                                        </Link>
                                </Form.Item>
                                </Form>
                            </Col>
                        </Row>
                       
                        <Row className="login_forget_password">
                            <Col span={24}>
                                <a>
                                <p style={{padding:"2px",fontSize:"13px"}}>گذرواژه خود را فراموش کردم</p>
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