import React, { Component } from "react";
import { Layout, Menu, Breadcrumb, Icon, Button } from "antd";
import { bindActionCreators } from 'redux';
import { BrowserRouter } from "react-router-dom";
import { connect } from 'react-redux';
import { receiveData } from './action';
import Nav from "./router/Nav";
import RouterUrl from "./router/RouterUrl";
import CommonFun from './javascript/commonFun';
import "./App.css";
const { Header, Sider, Content,Footer } = Layout;
const SubMenu = Menu.SubMenu;
@connect(mapStateToProps,mapDispatchToProps)
class App extends Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };
  render() {
    console.log(this.props.auth);
    console.log("公共函数:");
    console.log(CommonFun);
    return (
      <BrowserRouter>
      <div className="App">
        <Layout style={{ height: "100%" }}>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className='logo'/>
            <Nav/>
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
              <Footer style={{ textAlign:'center' }}>
              rc-Admin ©2017 Created by 827606400@qq.com
            </Footer>
              </Layout>
              </Layout>
      </div>
      </BrowserRouter>
    );
  }
}
const mapStateToProps = state => {
  const { auth = {data: {}} } = state.httpData;
  return {auth};
};
const mapDispatchToProps = dispatch => ({
  receiveData: bindActionCreators(receiveData, dispatch)
});

export default App;