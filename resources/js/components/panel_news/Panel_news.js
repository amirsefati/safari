import React from 'react'
import { Card } from 'antd';
import { LinkOutlined , FieldTimeOutlined , FileOutlined } from '@ant-design/icons';
const { Meta } = Card;
import new1 from './../images/logo_safari.png'

function Panel_news(){
    return(
        <div>
            <Card
                style={{ width: 300 ,background:"#F5F5F5" }}
                cover={
                <img
                    alt="ارسال آثار"
                    src={new1}
                />
                }
                actions={[
                <FileOutlined />,
                <LinkOutlined   />,
                <FieldTimeOutlined  />,
                ]}
            >
                <Meta
                title="ارسال آثار"
                description="مهلت ارسال آثار ۱۶ آذر"
                />
            </Card>
            
        </div>
    )
}

export default Panel_news;