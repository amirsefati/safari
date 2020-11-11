import React from 'react'
import { Card,Row,Col } from 'antd';
const { Meta } = Card;
import new1 from './../images/logo_safari.png'

function Panel_news(){
    return(
        <div>
            <Row>
                <Col md={6} xs ={24}>
                        <Card
                        style={{ width:"100%" ,background:"#F5F5F5" }}
                        cover={
                        <img
                            alt="ارسال آثار"
                            src={new1}
                        />
                        }
                        
                    >
                        <Meta
                        title="ارسال آثار"
                        description=" آخرین مهلت ارسال آثار ۱۶ آذر"
                        /> 
                        <br/>
                        <br/>
                    </Card>
                </Col>
            </Row>
            
            
        </div>
    )
}

export default Panel_news;