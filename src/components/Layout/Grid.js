import React from 'react'
import {Layout, Row, Col} from 'antd';
import styles from './Grid.css';
let {Content} = Layout;
export const Grid = (props) => {
    return (
        <div>
            <Content className={styles.layoutGridContent}>
                <h2>Basic use</h2>
                <div>
                    <Row span={24}>col-24</Row>
                    <Row>
                        <Col span={12}>col-12</Col>
                        <Col span={12}>col-12</Col>
                    </Row>
                    <Row>
                        <Col span={8}>col-8</Col>
                        <Col span={8}>col-8</Col>
                        <Col span={8}>col-8</Col>
                    </Row>
                    <Row>
                        <Col span={6}>col-6</Col>
                        <Col span={6}>col-6</Col>
                        <Col span={6}>col-6</Col>
                        <Col span={6}>col-6</Col>
                    </Row>
                </div>
            </Content>
        </div>
    )
}

export default Grid