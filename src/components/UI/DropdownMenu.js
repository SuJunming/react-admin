import React, { Component } from "react";
import {
  Icon,
  Breadcrumb,
  Menu,
  Dropdown,
  Row,
  Col,
  message,
  Layout,
  Button
} from "antd";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
const { Content } = Layout;
const menu = (
  <Menu>
    <Menu.Item key="0">
      <a target="_blank" rel="noopener noreferrer">
        1st menu item
      </a>
    </Menu.Item>
    <Menu.Item key="1">
      <a target="_blank" rel="noopener noreferrer">
        2nd menu item
      </a>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="3" disabled>
      3d menu item（disabled）
    </Menu.Item>
  </Menu>
);
const Blockmenu = (
  <Menu onClick={this.handleMenuClick}>
    <Menu.Item key="1">1st menu item</Menu.Item>
    <Menu.Item key="2">2nd menu item</Menu.Item>
    <Menu.Item key="3">3d menu item</Menu.Item>
  </Menu>
);
const menudirection = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer">
        1st menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer">
        2nd menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer">
        3d menu item
      </a>
    </Menu.Item>
  </Menu>
);
class DropdownMenu extends Component {
  componentWillMount = () => {
    NProgress.start();
  };
  componentDidMount = () => {
    NProgress.done();
  };
  handleButtonClick = e => {
    message.info("Click on left button.");
  };

  handleMenuClick = e => {
    message.info("Click on menu item.");
  };
  render() {
    return (
      <div>
        <Breadcrumb>
        <Breadcrumb.Item href="">
          <Icon type="home" />
        </Breadcrumb.Item>
        <Breadcrumb.Item href="">
          <Icon type="credit-card" />
          <span>UI</span>
        </Breadcrumb.Item>
        <Breadcrumb.Item>DropdownMenu</Breadcrumb.Item>
      </Breadcrumb>
        <Row>
          <Col span={12}>
            <Content
              style={{
                margin: "10px 5px",
                background: "rgba(255, 255, 255,0.6)",
                padding: 30
              }}
            >
              <Dropdown overlay={menu}>
                <a className="ant-dropdown-link" href="#">
                  Hover me <Icon type="down" />
                </a>
              </Dropdown>
            </Content>
          </Col>
          <Col span={12}>
            <Content
              style={{
                margin: "10px 5px",
                background: "rgba(255, 255, 255,0.6)",
                padding: 30
              }}
            >
              <Dropdown.Button
                onClick={this.handleButtonClick}
                overlay={Blockmenu}
              >
                Dropdown
              </Dropdown.Button>
              <Dropdown.Button
                onClick={this.handleButtonClick}
                overlay={menu}
                disabled
                style={{ marginLeft: 8 }}
              >
                Dropdown
              </Dropdown.Button>
              <Dropdown overlay={menu}>
                <Button style={{ marginLeft: 8 }}>
                  Button <Icon type="down" />
                </Button>
              </Dropdown>
            </Content>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
          <Content
          style={{
            margin: "10px 5px",
            background: "rgba(255, 255, 255,0.6)",
            padding: 30
          }}
        >
            <Dropdown overlay={menudirection} placement="bottomLeft">
              <Button>bottomLeft</Button>
            </Dropdown>
            <Dropdown overlay={menudirection} placement="bottomCenter">
              <Button>bottomCenter</Button>
            </Dropdown>
            <Dropdown overlay={menudirection} placement="bottomRight">
              <Button>bottomRight</Button>
            </Dropdown>
            <br />
            <Dropdown overlay={menudirection} placement="topLeft">
              <Button>topLeft</Button>
            </Dropdown>
            <Dropdown overlay={menudirection} placement="topCenter">
              <Button>topCenter</Button>
            </Dropdown>
            <Dropdown overlay={menudirection} placement="topRight">
              <Button>topRight</Button>
            </Dropdown>
            </Content>
          </Col>
        </Row>
      </div>
    );
  }
}

export default DropdownMenu;
