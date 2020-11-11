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
import {Link, useHistory} from 'react-router-dom'

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
    const History = useHistory()

    const handleUpload = () => {
      
        const formData = new FormData();
        fileList.forEach(file => {
          formData.append('files[]', file);
          formData.append('select', selectList);
          formData.append('input', inputTitle);
          formData.append('kind', 'مالتی مدیا');

        });

        

        if(inputTitle.length > 3 && selectList.length > 5){
          setUploading(true)

        Axios.post('/apiv1/upload_file',formData)
        .then((res)=>{
          if(res.status === 200){
            notification.open({
              message:'فایل با موفقیت آپلود شد',
              description:'با تشکر از شما'
            })
            setUploading(false)
            setTimeout(() => {
              History.push('result')

            }, 3000);
          }else{
            notification.open({
              message:'خطا',
              description:'خطا در بارگذاری فایل'
            })
            setUploading(false)
          }
        })
      }else{
        notification.open({
          message:'خطا',
          description:'لطفا فیلد ها را کامل پر کنید'
        })
      }
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
                دسته بندی
              </Col>

              <Col md={16} xs={16}>
              ارسال اثر ویدئویی
              </Col>
           </Row>
           <br/>


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
                    <Option value="جنایات آمریکا در منطقه">جنایات آمریکا در منطقه</Option>
                      <Option value="نفوذ اقتصادی آمریکا در منطقه">نفوذ اقتصادی آمریکا در منطقه</Option>
                      <Option value="نفوذ نظامی-امنیتی آمریکا در منطقه">نفوذ نظامی-امنیتی آمریکا در منطقه</Option>
                      <Option value="راهبرد های آمریکا در منطقه">راهبرد های آمریکا در منطقه</Option>

                    </OptGroup>
                    <OptGroup label="منطقه زیر زره بین">
                      <Option value="تحلیل جریان های آمریکایی و ضد آمریکایی در منطقه">تحلیل جریان های آمریکایی و ضد آمریکایی در منطقه</Option>
                    </OptGroup>

                    <OptGroup label="خروش منطقه علیه استکبار">
                      <Option value="نقش ظرفیت های مردمی در اخراج آمریکا از منطقه">نقش ظرفیت های مردمی در اخراج آمریکا از منطقه</Option>
                      <Option value="راهکار های اقتصادی اخراج آمریکا از منطقه">راهکار های اقتصادی اخراج آمریکا از منطقه</Option>
                      <Option value="راهکار های نظامی-امنیتی اخراج آمریکا از منطقه">راهکار های نظامی-امنیتی اخراج آمریکا از منطقه</Option>
                      <Option value="راهکار های سیاسی اخراج آمریکا از منطقه">راهکار های سیاسی اخراج آمریکا از منطقه</Option>

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