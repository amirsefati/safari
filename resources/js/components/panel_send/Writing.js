import React ,{useState,useEffect} from 'react'
import {
    Form,
    Select, 
    Button,
    Upload,
    Input,
    Row,
    Col,
  } from 'antd';
import { UploadOutlined, InboxOutlined } from '@ant-design/icons';

const { Option } = Select;

const formItemLayout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 14 },
};

const normFile = e => {
  console.log('Upload event:', e);
  if (Array.isArray(e)) {
    return e;
  }
  return e && e.fileList;
};



function Writing(porps){
    const onFinish = values => {
        console.log('Received values of form: ', values);
      };

    return(
        <div>
              <Form
                name="validate_other"
                {...formItemLayout}
                onFinish={onFinish}
                initialValues={{
                    ['input-number']: 3,
                    ['checkbox-group']: ['A', 'B'],
                    rate: 3.5,
                }}
                >
                <Form.Item label="نوع اثر">
                    <span className="ant-form-text">نگارشی</span>
                </Form.Item>

                <Form.Item
                    label="عنوان اثر"
                    name="username"
                    rules={[
                        { required: true, message: 'لطفا عنوان اثر را وارد کنید' },
                    ]}
                >
                <Input />
                </Form.Item>
                
                <Form.Item
                    name="select"
                    label="محور اثر"
                    hasFeedback
                    rules={[{ required: true, message: 'لطفا محور اثر را وارد کنید' }]}
                >
                    <Select placeholder="لطفا یک محور را انتخاب کنید">
                    <Option value="1">نیمه پنهان</Option>
                    <Option value="2">منطقه زیر زره بین</Option>
                    <Option value="3">خروش منطقه علیه استکبار</Option>
                

                    </Select>
                </Form.Item>

                <Form.Item label="فایل ها">
                    <Form.Item name="dragger" valuePropName="fileList" getValueFromEvent={normFile} noStyle>
                    <Upload.Dragger name="files" action="/upload.do">
                        <p className="ant-upload-drag-icon">
                        <InboxOutlined />
                        </p>
                        <p className="ant-upload-text">برای آپلود اثر خود کلیک کنید</p>
                        <p className="ant-upload-hint">میتوانید چندین فایل را آپلود کنید</p>
                    </Upload.Dragger>
                    </Form.Item>
                </Form.Item>

                <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
                    <Button type="primary" htmlType="submit">
                    ارسال فایل
                    </Button>
                </Form.Item>
                </Form>
        </div>
    )
}


export default Writing;