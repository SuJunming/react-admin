import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import HeaderLeft from './header';
import Buttons from '../components/UI/buttons';
import { Layout, Menu, Breadcrumb, Icon, Button } from 'antd';
const { Header, Sider, Content } = Layout;
const SubMenu = Menu.SubMenu;
class RouteUrl extends Component {
    state = {
        collapsed: false,
      };
    toggle = () => {
        this.setState({
          collapsed: !this.state.collapsed,
        });
      }
  render() {
    return (
        <Router>
            <Layout style={{height:'100%'}}>
                <Sider
                trigger={null}
                collapsible
                collapsed={this.state.collapsed}
                >
                    <HeaderLeft/>
                </Sider>
                <Layout>
                    <Header style={{ background: '#fff', padding: 0,paddingLeft:'20px' }}>
                        <Icon
                            className="trigger"
                            type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                            onClick={this.toggle}
                            style={{ fontSize: 20}}
                        />
                    </Header>
                    <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
                        <Route exact path="/" component={Buttons} />
                    </Content>
                    </Layout>
            </Layout>
        </Router>
    );
  }
}
export default RouteUrl;