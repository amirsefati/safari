import React ,{useState,useEffect} from 'react'
import {
    Form,
    Select, 
    Button,
    Upload,
    Input,
    Row,
    Col,
    notification
  } from 'antd';
import { UploadOutlined,TagOutlined   , InboxOutlined } from '@ant-design/icons';
import Axios from 'axios';

const { Option, OptGroup } = Select;

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

    const [fileList,setfileList] = useState([])
    const [selectList,setselectList] = useState('')
    const [inputTitle,setinputTitle] = useState('')

    const [uploading,setUploading] = useState(false)

    

    const handleChangeSelect =(value) =>{
      setselectList(value)
    }

    const handleChangeInput = input =>{
      setinputTitle(input.target.value)
    }

    const handleUpload = () => {
      
        const formData = new FormData();
        fileList.forEach(file => {
          formData.append('files[]', file);
          formData.append('select', selectList);
          formData.append('input', inputTitle);
          formData.append('kind', 'گرافیکی');

        });

        

        setUploading(true)

        Axios.post('/apiv1/upload_file',formData)
        .then((res)=>{
          if(res.status === 200){
            notification.open({
              message:'فایل با موفقیت آپلود شد',
              description:'با تشکر از شما'
            })
            setUploading(false)
          }else{
            notification.open({
              message:'خطا',
              description:'خطا در بارگذاری فایل'
            })
            setUploading(false)
          }
        })
      };

      const props = {
        onRemove: file => {
            const index = fileList.indexOf(file);
            const newFileList = fileList.slice();
            newFileList.splice(index, 1);
            setfileList(newFileList)
        },
        beforeUpload: file => {
          setfileList([...fileList,file])
          return false;
        },
        fileList,
      };

    return(
        <div>
            <Row>
              <Col md={3} xs={8}>
                عنوان اثر
              </Col>

              <Col md={16} xs={16}>
                <Input size="large" placeholder="عنوان اثر" prefix={<TagOutlined   />} onChange={handleChangeInput}/>
              </Col>

            </Row>
            <br/>
            <Row>
              <Col md={3} xs={8}>
                 محور اثر
              </Col>

              <Col md={16} xs={16}>
                  <Select defaultValue="انتخاب محور اثر" style={{ width: "100%" }} onChange={handleChangeSelect}>
                    <OptGroup label="نیمه پنهان" >
                      <Option value="1">جنایات آمریکا در منطقه</Option>
                      <Option value="2">نفوذ اقتصادی آمریکا در منطقه</Option>
                      <Option value="3">نفوذ نظامی-امنیتی آمریکا در منطقه</Option>
                      <Option value="4">راهبرد های آمریکا در منطقه</Option>

                    </OptGroup>
                    <OptGroup label="منطقه زیر زره بین">
                      <Option value="5">تحلیل جریان های آمریکایی و ضد آمریکایی در منطقه</Option>
                    </OptGroup>

                    <OptGroup label="خروش منطقه علیه استکبار">
                      <Option value="6">نقش ظرفیت های مردمی در اخراج آمریکا از منطقه</Option>
                      <Option value="7">راهکار های اقتصادی اخراج آمریکا از منطقه</Option>
                      <Option value="8">راهکار های نظامی-امنیتی اخراج آمریکا از منطقه</Option>
                      <Option value="9">راهکار های سیاسی اخراج آمریکا از منطقه</Option>

                    </OptGroup>
                  </Select>        
              </Col>

            </Row>

            <br/>

            <Row>
              <Col md={3} xs={8}>
                  آپلود اثر
              </Col>

              <Col md={16} xs={16}>
                  <Upload {...props}>
                    <Button icon={<UploadOutlined />}>انتخاب فایل</Button>
                  </Upload>
                  <br/>
                    <Button
                      type="primary"
                      onClick={handleUpload}
                      disabled={fileList.length === 0}
                      loading={uploading}
                      style={{ marginTop: 16 }}
                    >
                      {uploading ? 'در حال بارگذاری' : 'تایید و آپلود'}
                    </Button>       
              </Col>

            </Row>
             
        </div>
    )
}


export default Writing;