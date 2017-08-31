import React, { Component } from "react";
import Nav from "./router/Nav";
import RouterUrl from "./router/RouterUrl";
import { Layout, Menu, Breadcrumb, Icon, Button } from "antd";
import "./App.css";
const { Header, Sider, Content } = Layout;
const SubMenu = Menu.SubMenu;
class App extends Component {
  state = {
    collapsed: false
  };
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };
  render() {
    return (
      <div className="App">
        <Layout style={{ height: "100%" }}>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className='logo'/>
            <Nav />
          </Sider>
          <Layout>
            <Header
              style={{ background: "#424242 !important", padding: 0, paddingLeft: "20px" }}
            >
              <Icon
                className="trigger"
                type={this.state.collapsed ? "menu-unfold" : "menu-fold"}
                onClick={this.toggle}
                style={{ fontSize: 20,color:'#fff' }}
              />
            </Header>
              <RouterUrl/>
              </Layout>
              </Layout>
      </div>
    );
  }
}
export default App;
