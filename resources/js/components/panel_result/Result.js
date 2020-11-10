import Axios from "axios";
import React,{ useEffect, useState } from "react"
import {Table} from 'antd'

function Result(){
    const columns = [
        {
          title: 'عنوان',
          dataIndex: 'title',
          key: 'title',
        },
        {
          title: 'دسته بندی',
          dataIndex: 'kind',
          key: 'kind',
        },
        {
          title: 'محور',
          dataIndex: 'axis',
          key: 'axis',
        },
        {
            title: 'وضعیت',
            dataIndex: 'status',
            key: 'status',
        },
        {
            title: 'عملیات',
            dataIndex: 'etc1',
            key: 'etc1',
            render: etc1 => <a href={"/apiv1/delete/"+etc1}>حذف</a>,

        },
          
      ];


    const [files,setFiles] = useState('');

    useEffect(()=>{
        Axios.post('/apiv1/get_media',{})
        .then((res)=>{
            if(res.status === 200){
                setFiles(res.data.data)
            }
        })
    },[])

    return(
        <div>
            <Table columns={columns} dataSource={files}/>

        </div>
    )
}

export default Result;