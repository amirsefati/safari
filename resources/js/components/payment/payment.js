import React,{component,useState,useEffect} from 'react'
import {Row,Col,notification,Button,Select,Input} from 'antd'
import Axios from 'axios'

function Payment(){

    const [user,setuser] = useState([])
    const [selectList,setselectList] = useState(null)
    const [code,setcode] = useState(null)
    const [price,setprice] = useState(40000)

    const handleChangeSelect =(value) =>{
        setselectList(value)
      }

    const handleChangeInput =(input) =>{
        setprice(40000)
        setcode(input.target.value.toLowerCase())
        if(input.target.value.toLowerCase() === 'khoroush'){
          if(user.picture === 'Khoroush'){

            notification.open({
                message:' کد تخفیف',
                description:'کد تخفیف اعمال شد (تخفیف 50درصدی)'
              })
              setprice(20000)
            }
          else{
            notification.open({
                message:'خطا کد تخفیف',
                description:'این کد برای شما تعریف نشده است'
              })
            }
        }
    }
    const pay = () =>{
        if(selectList === null){
            notification.open({
                message:'خطا',
                description:'لطفا فیلد چگونه با رویداد آشنا شدید را پر کنید'
              })
        }
        else{
            Axios.post('/apiv1/pay_andresrve',{
                data : {'select_item' : selectList , 'code' : code}
            }).then((res)=>{
                console.log(res.data)
            })
        }
        
    }
    useEffect(()=>{
        Axios.get('/apiv1/payment_user_verify')
        .then((res)=>{
            if(res.data.status === 200){
                setuser(res.data.user)
            }
        })
    },[])
    
    return(
        <div>

            <Row>
                <Col md={24} style={{textAlign:'center'}}>
                    <p style={{fontSize:'16px'}}>
                    رویداد تخصصی اخراج آمریکا از منطقه
                    </p>
                    <p style={{fontSize:'12px'}}>
                    این رویداد در ابتدا با جمع آوری آثار علاقه مندان تحت عنوان مسابقه خروش ، شروع به کار کرده سپس در همایش تخصصی اخراج آمریکا از منطقه در تاریخ چهارشنبه 10 دی ماه (شروع از 9/5 صبح الی 17 همراه با پخش ناهار و پذیرایی) با حضور متخصصین و صاحب نظران این حوزه قصد بررسی نظرات ، ایده ها و ابعاد عملیاتی اخراج آمریکا از منطقه بپردازد.
                    همچنین در این همایش برای اولین بار از مستند اخراج ساخت گروه سفیرفیلم رونمایی خواهد شد. در پایان برنامه نیز از برگزیدگان رویداد خروش تجلیل خواهد شد.

                    هزینه شرکت در این همایش 40 هزارتومان میباشد و افرادیکه در مسابقه خروش شرکت کردند با 50 درصد تخفیف میتوانند در برنامه شرکت نمایند.
                    </p>
                </Col>
            </Row>
            <hr style={{border: '0',height: '1px',backgroundImage: 'linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0))'}}/>
            <br/>
            <Row>
                <Col md={8} style={{textAlign:'center'}}>
                    <p> نام شرکت کننده : {user.name}</p>
                </Col>

                <Col md={8} style={{textAlign:'center'}}>
                    <p> ایمیل : {user.email}</p>
                </Col>

                <Col md={8} style={{textAlign:'center'}}>
                    <p> شماره تلفن : {user.phone}</p>
                </Col>
            </Row>
            <br/>
            <Row>
                <Col md={1}></Col>
                <Col md={10}>
                <p>چگونه با رویداد آشنا شدید : </p>

                <Select defaultValue="نحوه آشنایی با رویداد" style={{ width: "100%" }} onChange={handleChangeSelect}>

                    <Option value="تبلیغات کانال بله و تلگرام"> تبلیغات کانال بله و تلگرام</Option>
                    <Option value="دوست و آشنا">دوست و آشنا</Option>
                    <Option value="تبلیغات در فضای اینستاگرام">تبلیغات در فضای اینستاگرام</Option>
                    <Option value="صداسیما">صداسیما</Option>
                    <Option value="سایر">سایر</Option>

                  </Select>               
                </Col>

                <Col md={2}></Col>
                <Col md={10}>
                <p> کد تخفیف  : </p>

                <Input onChange={handleChangeInput}></Input>              
                </Col>
            </Row>
            <br/>
            <br/>

            <Row>
                <Col md={24} style={{textAlign:'center'}}>
                    <p> هزینه شرکت در رویداد : {price} هزار تومان</p>
                </Col>
            </Row>

            <Row>
                <Col md={24} style={{textAlign:'center'}}>
                    <Button type="primary" onClick={pay}>پرداخت</Button>
                </Col>
            </Row>
        </div>
    )
}

export default Payment;