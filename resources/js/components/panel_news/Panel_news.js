import React from 'react'
import { Card } from 'antd';
import { LinkOutlined , FieldTimeOutlined , FileOutlined } from '@ant-design/icons';
const { Meta } = Card;


function Panel_news(){
    return(
        <div>
            <Card
                style={{ width: 300 ,background:"#F5F5F5" }}
                cover={
                <img
                    alt="عنوان"
                    src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
                }
                actions={[
                <FileOutlined />,
                <LinkOutlined   />,
                <FieldTimeOutlined  />,
                ]}
            >
                <Meta
                title="عنوان"
                description="توضیحات"
                />
            </Card>
            
        </div>
    )
}

export default Panel_news;