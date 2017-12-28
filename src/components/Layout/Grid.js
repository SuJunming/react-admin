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
                    <Row>
                        <Col span={24} className={styles.layoutGridItem}>col-24</Col>
                    </Row>
                    <Row>
                        <Col span={12} className={styles.layoutGridItem}>col-12</Col>
                        <Col span={12} className={styles.layoutGridItem}>col-12</Col>
                    </Row>
                    <Row>
                        <Col span={8} className={styles.layoutGridItem}>col-8</Col>
                        <Col span={8} className={styles.layoutGridItem}>col-8</Col>
                        <Col span={8} className={styles.layoutGridItem}>col-8</Col>
                    </Row>
                    <Row>
                        <Col span={6} className={styles.layoutGridItem}>col-6</Col>
                        <Col span={6} className={styles.layoutGridItem}>col-6</Col>
                        <Col span={6} className={styles.layoutGridItem}>col-6</Col>
                        <Col span={6} className={styles.layoutGridItem}>col-6</Col>
                    </Row>
                </div>
                <h2>Advance use</h2>
                <div>
                    <Row>
                        <Col span={24} className={styles.layoutGridItem}>col-24</Col>
                    </Row>
                    <Row>
                        <Col span={12} className={styles.layoutGridItem}>col-12</Col>
                        <Col span={12} className={styles.layoutGridItem}>col-12</Col>
                    </Row>
                    <Row>
                        <Col span={8} className={styles.layoutGridItem}>col-8</Col>
                        <Col span={8} className={styles.layoutGridItem}>col-8</Col>
                        <Col span={8} className={styles.layoutGridItem}>col-8</Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span={6} className={styles.layoutGridItem}>col-6</Col>
                        <Col span={6} className={styles.layoutGridItem}>col-6</Col>
                        <Col span={6} className={styles.layoutGridItem}>col-6</Col>
                        <Col span={6} className={styles.layoutGridItem}>col-6</Col>
                    </Row>
                </div>
            </Content>
        </div>
    )
}

export default Grid