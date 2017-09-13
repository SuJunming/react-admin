import React, { Component } from "react";
import { Layout, Icon } from "antd";
import { bindActionCreators } from 'redux';
import { BrowserRouter } from "react-router-dom";
import { connect } from 'react-redux';
import { receiveData } from './action';
import Nav from "./router/Nav";
import RouterUrl from "./router/RouterUrl";
import {trim} from './javascript/commonFun';
import "./App.css";
const { Header, Sider,Footer } = Layout
const mapStateToProps = state => {
  console.log(state);
  const  Data = state.defaultData;
  return {Data};
};
const mapDispatchToProps = dispatch => ({
  receiveData: bindActionCreators(receiveData, dispatch)
});
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
    console.log('初始化redux-state:');
    console.log(this.props.receiveData);
    console.log('公共函数一:去除空格(另外几十种方法commonFun查看)');
    let a=" a   "
    console.log(trim(a,1));
    return (
      <BrowserRouter>
      <div className="App">
        <Layout style={{ height: "100%" }}>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className='logo' style={{color:'#fff'}}>Su</div>
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
export default App;