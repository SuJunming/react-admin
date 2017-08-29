import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
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
            <Nav />
          </Sider>
          <Layout>
            <Header
              style={{ background: "#fff", padding: 0, paddingLeft: "20px" }}
            >
              <Icon
                className="trigger"
                type={this.state.collapsed ? "menu-unfold" : "menu-fold"}
                onClick={this.toggle}
                style={{ fontSize: 20 }}
              />
            </Header>
            <Content
              style={{
                margin: "24px 16px",
                padding: 24,
                background: "#fff",
                minHeight: 280
              }}
            >
              <RouterUrl />
            </Content>
          </Layout>
        </Layout>
      </div>
    );
  }
}
export default App;
