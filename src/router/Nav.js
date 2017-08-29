import React, { Component } from 'react';
import {
    BrowserRouter,
    Route,
    Link,
} from 'react-router-dom';
import { Menu, Icon, Switch } from 'antd';
import '../App.css'
const SubMenu = Menu.SubMenu;
class Nav extends Component {
    state = {
        theme: 'dark',
        current: '1',
      }
      changeTheme = (value) => {
        this.setState({
          theme: value ? 'dark' : 'light',
        });
      }
      handleClick = (e) => {
        this.setState({
          current: e.key,
        });
      }
      render() {
          return(
            <Menu
            theme={this.state.theme}
            onClick={this.handleClick}
            style={{ width:'100%' }}
            defaultOpenKeys={['/Buttons']}
            selectedKeys={[this.state.current]}
            mode="inline"
          >
            <SubMenu key="/Buttons" title={<span><Icon type="mail" /><span>UI</span></span>}>
              <Menu.Item key="1"><Link to={`/buttons`}>按钮</Link></Menu.Item>
              <Menu.Item key="2"><Link to={`/icon`}>icon</Link></Menu.Item>
              <Menu.Item key="3">Option 3</Menu.Item>
              <Menu.Item key="4">Option 4</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>Navigtion Two</span></span>}>
              <Menu.Item key="5">Option 5</Menu.Item>
              <Menu.Item key="6">Option 6</Menu.Item>
              <SubMenu key="sub3" title="Submenu">
                <Menu.Item key="7">Option 7</Menu.Item>
                <Menu.Item key="8">Option 8</Menu.Item>
              </SubMenu>
            </SubMenu>
            <SubMenu key="sub4" title={<span><Icon type="setting" /><span>Navigation Three</span></span>}>
              <Menu.Item key="9">Option 9</Menu.Item>
              <Menu.Item key="10">Option 10</Menu.Item>
              <Menu.Item key="11">Option 11</Menu.Item>
              <Menu.Item key="12">Option 12</Menu.Item>
            </SubMenu>
          </Menu>
        )
    }
}
export default Nav