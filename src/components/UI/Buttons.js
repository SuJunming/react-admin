import React, { Component } from "react";
import { 
  Button,
  Layout,
  Row,
  Col,
  Icon,
  Breadcrumb
 } from "antd";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
const { Content } = Layout;
const ButtonGroup = Button.Group;
class Buttons extends Component {
  componentWillMount = () => {
    NProgress.start();
  };
  componentDidMount = () => {
    NProgress.done();
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
          <Breadcrumb.Item>Buttons</Breadcrumb.Item>
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
              <h4>Basic</h4>
              <ButtonGroup>
                <Button>Cancel</Button>
                <Button type="primary">OK</Button>
              </ButtonGroup>
              <ButtonGroup>
                <Button disabled>L</Button>
                <Button disabled>M</Button>
                <Button disabled>R</Button>
              </ButtonGroup>
              <ButtonGroup>
                <Button type="primary">L</Button>
                <Button>M</Button>
                <Button>M</Button>
                <Button type="dashed">R</Button>
              </ButtonGroup>

              <h4>With Icon</h4>
              <ButtonGroup>
                <Button type="primary">
                  <Icon type="left" />Go back
                </Button>
                <Button type="primary">
                  Go forward<Icon type="right" />
                </Button>
              </ButtonGroup>
              <ButtonGroup>
                <Button type="primary" icon="cloud" />
                <Button type="primary" icon="cloud-download" />
              </ButtonGroup>
            </Content>
          </Col>
          <Col span={12}>
            <Content
              style={{
                margin: "10px 5px",
                padding: 30,
                background: "rgba(255, 255, 255,0.6)"
              }}
            >
              <Button type="primary" shape="circle" icon="search" />
              <Button type="primary" icon="search">
                Search
              </Button>
              <Button shape="circle" icon="search" />
              <Button icon="search">Search</Button>
              <br />
              <Button shape="circle" icon="search" />
              <Button icon="search">Search</Button>
              <Button type="dashed" shape="circle" icon="search" />
              <Button type="dashed" icon="search">
                Search
              </Button>
            </Content>
          </Col>
          <style>
            {`
              .ant-btn{
                  margin:10px;
              }
              .ant-layout-content{
                    text-align:center;
              }
              `}
          </style>
        </Row>
        <Row>
          <Col span={12}>
            <Content
              style={{
                margin: "10px 16px",
                padding: 30,
                background: "rgba(255, 255, 255,0.6)"
              }}
            >
              <Button type="primary">Primary</Button>
              <Button>Default</Button>
              <br />
              <Button type="dashed">Dashed</Button>
              <Button type="danger">Danger</Button>
            </Content>
          </Col>
          <Col span={12}>
            <Content
              style={{
                margin: "10px 5px",
                background: "rgb(190, 200, 200)",
                padding: 30
              }}
            >
              <Button type="primary" ghost>
                Primary
              </Button>
              <Button ghost>Default</Button>
              <br />
              <Button type="dashed" ghost>
                Dashed
              </Button>
              <Button type="danger" ghost>
                danger
              </Button>
            </Content>
          </Col>
          <Col span={24}>
            <Content
              style={{
                margin: "10px 5px",
                background: "rgba(255, 255, 255,0.6)",
                padding: 30
              }}
            >
              <Button type="primary">Primary</Button>
              <Button type="primary" disabled>
                Primary(disabled)
              </Button>
              <br />
              <Button>Default</Button>
              <Button disabled>Default(disabled)</Button>
              <br />
              <Button>Ghost</Button>
              <Button disabled>Ghost(disabled)</Button>
            </Content>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Buttons;
