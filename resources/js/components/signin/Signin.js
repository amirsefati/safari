import React, { useState } from 'react';
import './signin.css'
import Axios from 'axios';
import {Link,useHistory} from 'react-router-dom'
import Logo from './../images/logo_safari.png'

import {
    Form,
    Input,
    Tooltip,
    Cascader,
    Select,
    Row,
    Col,
    Checkbox,
    Button,
    AutoComplete,
    notification
  } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';

const { Option } = Select;
const AutoCompleteOption = AutoComplete.Option;



const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 8 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 16 },
    },
  };

  const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0,
      },
      sm: {
        span: 16,
        offset: 8,
      },
    },
  };
  
  const tailFormItemLayout1 = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0,
      },
      sm: {
        span: 24,
        offset: 0,
      },
    },
  };

  
const Signin = (props) => {
    const [form] = Form.useForm();
    const History = useHistory()

    const onFinish = values => {
      Axios.post('/apiv1/registeruser',{
          data : values
      }).then(res => {
          if(res.data === 102){
            notification.open({
              message:'خطا در ثبت نام',
              description:'چنین کاربری با این ایمیل در سامانه  قبلا ثبت شده است'
            })
          }else if(res.data === 200){
            notification.open({
              message:'ثبت نام با موفقیت انجام شد',
              description:'شما وارد سایت شدید'
            })
            props.check('HAHA')

            History.push('panel/news')

          }else{
            alert('مشکلی پیش آمده لطفا با مدیریت تماس بگیرید')
          }
      })
    };
  
    const prefixSelector = (
      <Form.Item name="prefix" noStyle>
        <Select style={{ width: 70 }}>
          <Option value="86">+98</Option>
        </Select>
      </Form.Item>
    );
  
  
   return(
        <div className="login_panel">
            <Row>
                <Col md={4} xs={1}></Col>
                <Col md={16} xs={22}>
                    <div className="signin_layout">
                        <Row className="login_logo">
                            <Col span={24}>
                                <img src={Logo} style={{width:"200px",margin:"20px"}}/>
                            </Col>
                        </Row>

                        <Row className="login_text_under_logo">
                            <Col span={24}>
                                <br/>
                            </Col>
                        </Row>

                        <Row className="login_login">
                            <Col md={7} xs={1}></Col>
                            <Col md={10} xs={22}>
                            <Form
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={onFinish}
      initialValues={{

        prefix: '+98',
      }}
      scrollToFirstError
    >

        <Form.Item
        name="name"
        label="نام و نام خانودگی"
        rules={[
          {
            required: true,
            message: 'لطفا نام خود را کامل وارد کنید',
          },
        ]}
      >
        <Input />
      </Form.Item>


      <Form.Item
        name="email"
        label="ایمیل"
        rules={[
          {
            type: 'email',
            message: 'لطفا ایمیل معتبر وارد کنید',
          },
          {
            required: true,
            message: 'لطفا ایمیل خود را وارد کنید',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="password"
        label="گذرواژه"
        rules={[
          {
            required: true,
            message: 'لطفا پسورد را وارد کنید',
          },
        ]}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="confirm"
        label="تکرار گذرواژه"
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            message: 'لطفا تایید پسورد را وارد کنید',
          },
          ({ getFieldValue }) => ({
            validator(rule, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject('پسورد ها یکسان نیستند');
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="university"
        label={
          <span>
              <Tooltip title="لطفا نام دانشگاه و مقطع تحصیلی خود را وارد کنید">
              <QuestionCircleOutlined />
            </Tooltip>
            &nbsp;
            دانشگاه

          </span>
        }
        rules={[{ required: true, message: 'لطفا دانشگاه خود را وارد کنید', whitespace: true }]}
      >
        <Input />
      </Form.Item>


      <Form.Item
        name="phone"
        label="شماره تلفن"
        rules={[{ required: true, message: 'لطفا شماره تلفن حود را وارد کنید' }]}
      >
        <Input addonAfter={prefixSelector} style={{ width: '100%' }} />
      </Form.Item>

      <Form.Item
        name="born"
        label="تاریخ تولد"
        rules={[{ required: true, message: 'لطفا تاریخ تولد خود را وارد کنید' }]}
      >        
          <Input />
      </Form.Item>

      
      
      <Form.Item
        name="agreement"
        valuePropName="checked"
        rules={[
          {
            validator: (_, value) =>
              value ? Promise.resolve() : Promise.reject('لطفا قوانین را بخوانید و تیک بزنید'),
          },
        ]}
        {...tailFormItemLayout}
      >
        <Checkbox>
          با قوانین موافق هستم <a href="">(سند)</a>
        </Checkbox>
      </Form.Item>

      <Form.Item {...tailFormItemLayout1} style={{textAlign:"center"}}>
        <Button style={{padding:"5px 50px",}} type="primary" htmlType="submit">
          ثبت نام
        </Button>
      </Form.Item>
    </Form>
                     
                            </Col>
                        </Row>

                        <br/>   

                       

                        


                    </div>
                </Col>
            </Row>
        </div>
   )
}


export default Signin;