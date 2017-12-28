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
                        <Col span={24}><div className={styles.layoutGridItem}>col-24</div></Col>
                    </Row>
                    <Row>
                        <Col span={12}><div className={styles.layoutGridItem}></div></Col>
                        <Col span={12}><div className={styles.layoutGridItem}></div></Col>
                    </Row>
                    <Row>
                        <Col span={8}><div className={styles.layoutGridItem}>col-8</div></Col>
                        <Col span={8}><div className={styles.layoutGridItem}>col-8</div></Col>
                        <Col span={8}><div className={styles.layoutGridItem}>col-8</div></Col>
                    </Row>
                    <Row>
                        <Col span={6}><div className={styles.layoutGridItem}>col-6</div></Col>
                        <Col span={6}><div className={styles.layoutGridItem}>col-6</div></Col>
                        <Col span={6}><div className={styles.layoutGridItem}>col-6</div></Col>
                        <Col span={6}><div className={styles.layoutGridItem}>col-6</div></Col>
                    </Row>
                </div>
                <h2>Advance use</h2>
                <div>
                    <h3>offset</h3>
                    <Row>
                        <Col span={8} offset={8}><div className={styles.layoutGridItem}>col-8-offset-8</div></Col>
                        <Col span={8}><div className={styles.layoutGridItem}>col-8</div></Col>
                    </Row>
                    <Row>
                        <Col span={12}><div className={styles.layoutGridItem}>col-12</div></Col>
                        <Col span={12}><div className={styles.layoutGridItem}>col-12</div></Col>
                    </Row>
                    <Row>
                        <Col span={8}><div className={styles.layoutGridItem}>col-8</div></Col>
                        <Col span={8}><div className={styles.layoutGridItem}>col-8</div></Col>
                        <Col span={8}><div className={styles.layoutGridItem}>col-8</div></Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span={6}><div className={styles.layoutGridItem}>col-6-gutter-16</div></Col>
                        <Col span={6}><div className={styles.layoutGridItem}>col-6-gutter-16</div></Col>
                        <Col span={6}><div className={styles.layoutGridItem}>col-6-gutter-16</div></Col>
                        <Col span={6}><div className={styles.layoutGridItem}>col-6-gutter-16</div></Col>
                    </Row>
                </div>
            </Content>
        </div>
    )
}

export default Grid