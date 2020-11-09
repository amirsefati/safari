import React,{useState,useEffect} from 'react'
import { Layout, Menu, Breadcrumb } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  UserOutlined,
} from '@ant-design/icons';
import './panel.css'
import {Link,Switch,Route, BrowserRouter as Router, Redirect} from 'react-router-dom'
import Panel_register from '../panel_register/Panel_register';
import Panel_news from '../panel_news/Panel_news';
import Writing from '../panel_send/Writing';

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
            <Link to="/panel/news">

             &nbsp;  اخبار همایش</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<DesktopOutlined />}>
            <Link to="/panel/register">

            &nbsp;  ثبت نام در همایش</Link>
            </Menu.Item>
            <SubMenu key="sub1" icon={<UserOutlined />} title="&nbsp; ارسال آثار">
              
              <Menu.Item key="3"><Link to="/panel/writing">نگارشی</Link></Menu.Item>
              <Menu.Item key="4"><Link to="/panel/graphic">گرافیک</Link></Menu.Item>
              <Menu.Item key="5"><Link to="/panel/multiemdia">مالتی مدیا</Link></Menu.Item>
            </SubMenu>
            <Menu.Item key="9" icon={<FileOutlined />}>
              <Link to="/panel/result">
            &nbsp; نتایج</Link>
            </Menu.Item>

            <Menu.Item key="10" icon={<PieChartOutlined />}>
              <Link to="/panel/settings">
             &nbsp;  تنظمیات کاربری</Link>
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
              <Switch>
                  <Route path="/panel/register" component={Panel_register}></Route>
                  <Route path="/panel/news" component={Panel_news}></Route>
                  <Route path="/panel/writing" component={Writing}></Route>

              </Switch>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>اولین همایش تخصصی اخراج آمریکا از منطقه (1399)</Footer>
        </Layout>
      </Layout>
        </div>
    )
}

export default Panel;