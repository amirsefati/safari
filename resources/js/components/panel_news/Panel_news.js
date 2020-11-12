import React,{useState,useEffect} from 'react'
import { Card,Row,Col } from 'antd';
const { Meta } = Card;
import new1 from './../images/logo_safari.png'
import Axios from 'axios';

function Panel_news(){

    const [news,setNews] = useState([])
    useEffect(()=>{
        Axios.get('/apiv1/get_news')
        .then((res)=>{
            setNews(res.data)
        })
    },[])
    
    return(
        <div>
            <Row>
                {news.map((number) => 
                <Col md={6} xs ={24} key={number.id} style={{padding:"10px"}}>
                        <Card
                        style={{ width:"100%" ,background:"#F5F5F5" }}
                        cover={
                        <img
                            alt="ارسال آثار"
                            src={number.img}
                        />
                        }
                        
                    >
                        <Meta
                        title={number.title}
                        description={number.desc}
                        /> 
                        <br/>
                        <br/>
                    </Card>
                </Col>
                )}
            </Row>
            
            
        </div>
    )
}

export default Panel_news;