import React from 'react'
import {Row,Col} from 'antd'
import T1 from './../images/t1.png'
import T2 from './../images/t2.png'
import T3 from './../images/t3.png'

function Team(){
    return(
        <div style={{height:"110%",background:"#1F1E1B"}}>
            <Row style={{padding:"40px"}}>
                <Col md={3} xs={0}></Col>
                <Col md={6} xs={24}>
                    <img src={T1} style={{width:"100%"}}/>
                </Col>

                <Col md={6} xs={24}>
                    <img src={T2} style={{width:"100%"}}/>
                </Col>

                <Col md={6} xs={24}>
                    <img src={T3} style={{width:"100%"}}/>
                </Col>
            </Row>
        </div>
    )
}

export default Team;