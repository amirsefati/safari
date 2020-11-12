import React from 'react'
import {Row , Col} from 'antd';
import { Input,Button,Card  } from 'antd';
const { TextArea } = Input;
import {
    HomeOutlined,
    PhoneOutlined,
    MailOutlined ,
    MessageOutlined 
  } from '@ant-design/icons';
import Bale from './../images/bale.png'
import Telegram from './../images/telegram.png'
import Instagram from './../images/instagram.png'

function About(){
    return(
    <div>
        <Card title="ارتباط با ما" bordered={false}>

        <Row>
            <Col span={4}></Col>
            <Col span={16}>
                <br/>
                <br/>
            <iframe src={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1619.9845717689648!2d51.40867642238381!3d35.702376929376015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e017355f8f711%3A0x529be24006d33fe7!2zMzXCsDQyJzA2LjkiTiA1McKwMjQnMzYuOSJF!5e0!3m2!1sen!2s!4v1605006547351!5m2!1sen!2s"}  style={{border:0,width:"100%",height:"400px"}}></iframe>
            </Col>
        </Row>
            <br/>
            <br/>
            <br/>

        <Row>
            <Col md={4} xs={0}></Col>
            <Col md={5} xs={24} style={{padding:"10px"}}>
                <br/>
                <Row>
                    <p>
                <HomeOutlined style={{fontSize:"22px"}}/> <span/>
                 منطقه 6، خ انقلاب اسلامی، خ حافظ، ک البرز 1، پ 22، ط 1، واحد 2
                </p>
                </Row>
                

                <Row>
                    <p>
                <PhoneOutlined  style={{fontSize:"22px"}}/> <span/>
                64545195 (+21)
                </p>
                </Row>

                <Row>
                    <p>
                <MailOutlined   style={{fontSize:"22px"}}/> <span/>
                کد پستی : 1591634764 
                </p>
                </Row>

                <Row>
                    <p>
                <MessageOutlined   style={{fontSize:"22px"}}/> <span/>
                @amtt_admin 
                </p>
                </Row>

                <Row>
                <a href="https://t.me/khoroush_admin">
                    <img src={Telegram} style={{width:"40px",padding:"5px"}}/> 
                </a>
                <a  href="https://instagram.com/khoroush_admin">
                    <img src={Instagram} style={{width:"40px",padding:"5px"}}/> 
                </a>

                <a  href="https://web.bale.ai/khoroush_admin">
                    <img src={Bale} style={{width:"40px",padding:"5px"}}/> 
                </a>

                </Row>


            </Col>
            <Col md={1} xs={0}></Col>
            <Col md={9} xs={24} style={{padding:"10px"}}>
                <Row>
                    <Col span={24}>
                        <p style={{fontSize:"18px",fontWeight:"bold"}}>ارتباط با ما</p>
                    </Col>
                </Row>
                <Row>
                    <Col span={11}>
                        <Input placeholder="عنوان" />
                    </Col>
                    <Col span={1}></Col>
                    <Col span={12}>
                        <Input placeholder="موضوع" />
                    </Col>
                </Row>
                <br/>
                <p style={{color:"gray"}}> شرح</p>
                <TextArea showCount maxLength={100} />
                <br/>
                <Row>
                    <Button type="primary">ارسال</Button>

                </Row>
            </Col>
        </Row>

        <br/>
        <br/>
        <br/>
        <br/>
        </Card>
    </div>
    )
}


export default About;