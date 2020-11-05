import React,{useState,useEffect} from 'react'
import { Layout, Menu, Breadcrumb } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import './panel.css'
import {Link} from 'react-router-dom'

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;




function Panel(props){

    const [collapsed,setCollapsed] = useState(false)

   useEffect(()=>{
       if(window.innerWidth < 500){
        setCollapsed(true)
       }else{
        setCollapsed(false)
       }
   },[false])


    function onCollapse(){

        {collapsed ?
            setCollapsed(false)

        :
            setCollapsed(true)

        }
      };

      

    return(
        <div>
    <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1" icon={<PieChartOutlined />}>
             &nbsp;  اخبار همایش
            </Menu.Item>
            <Menu.Item key="2" icon={<DesktopOutlined />}>
            &nbsp;  ثبت نام در همایش
            </Menu.Item>
            <SubMenu key="sub1" icon={<UserOutlined />} title="&nbsp; ارسال آثار">
              
              <Menu.Item key="3">نگارشی</Menu.Item>
              <Menu.Item key="4">گرافیک</Menu.Item>
              <Menu.Item key="5">مالتی مدیا</Menu.Item>
            </SubMenu>
            <Menu.Item key="9" icon={<FileOutlined />}>
            &nbsp; نتایج
            </Menu.Item>

            <Menu.Item key="10" icon={<PieChartOutlined />}>
             &nbsp;  تنظمیات کاربری
            </Menu.Item>

            <Menu.Item key="11" icon={<PieChartOutlined />}>
             &nbsp;  خروج
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} >
            <span style={{padding:"2px 15px"}}> کاربر : {props.data['name']}</span>
          </Header>
          
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>پنل داشبورد</Breadcrumb.Item>
              <Breadcrumb.Item>داشبورد کاربر</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
              
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>اولین همایش تخصصی اخراج آمریکا از منطقه (1399)</Footer>
        </Layout>
      </Layout>
        </div>
    )
}

export default Panel;