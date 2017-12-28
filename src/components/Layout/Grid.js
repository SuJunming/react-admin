import React from 'react'
import {Layout, Row, Col} from 'antd';
import styles from './Grid.css';
const DemoBox = props => <div
    className={`height-${props.value} ${styles.layoutGridItem}`}
    style={{
    height: props.value + 'px'
}}>{props.children}</div>;
const DemoBox1 = props =>{
    return (
        <div className={styles.layoutGridItem}>{props.children}</div>
    )
}
let {Content} = Layout;
export const Grid = (props) => {
    return (
        <div>
            <Content className={styles.layoutGridContent}>
                <h2>Basic use</h2>
                <div className={`layoutGridWrapper`}>
                    <Row>
                        <Col span={24}>
                            <div className={styles.layoutGridItem}>col-24</div>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={12}>
                            <div className={styles.layoutGridItem}></div>
                        </Col>
                        <Col span={12}>
                            <div className={styles.layoutGridItem}></div>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={8}>
                            <div className={styles.layoutGridItem}>col-8</div>
                        </Col>
                        <Col span={8}>
                            <div className={styles.layoutGridItem}>col-8</div>
                        </Col>
                        <Col span={8}>
                            <div className={styles.layoutGridItem}>col-8</div>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={6}>
                            <div className={styles.layoutGridItem}>col-6</div>
                        </Col>
                        <Col span={6}>
                            <div className={styles.layoutGridItem}>col-6</div>
                        </Col>
                        <Col span={6}>
                            <div className={styles.layoutGridItem}>col-6</div>
                        </Col>
                        <Col span={6}>
                            <div className={styles.layoutGridItem}>col-6</div>
                        </Col>
                    </Row>
                </div>
                <h2>Advance use</h2>
                <div className={`layoutGridWrapper`}>
                    <h3>offset</h3>
                    <Row>
                        <Col span={8} offset={8}>
                            <div className={styles.layoutGridItem}>col-8-offset-8</div>
                        </Col>
                        <Col span={8}>
                            <div className={styles.layoutGridItem}>col-8</div>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={12}>
                            <div className={styles.layoutGridItem}>col-12</div>
                        </Col>
                        <Col span={12}>
                            <div className={styles.layoutGridItem}>col-12</div>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={8}>
                            <div className={styles.layoutGridItem}>col-8</div>
                        </Col>
                        <Col span={8}>
                            <div className={styles.layoutGridItem}>col-8</div>
                        </Col>
                        <Col span={8}>
                            <div className={styles.layoutGridItem}>col-8</div>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span={6}>
                            <div className={styles.layoutGridItem}>col-6-gutter-16</div>
                        </Col>
                        <Col span={6}>
                            <div className={styles.layoutGridItem}>col-6-gutter-16</div>
                        </Col>
                        <Col span={6}>
                            <div className={styles.layoutGridItem}>col-6-gutter-16</div>
                        </Col>
                        <Col span={6}>
                            <div className={styles.layoutGridItem}>col-6-gutter-16</div>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={18}>
                            <div className={styles.layoutGridItem}>col-18</div>
                        </Col>
                        <Col span={6}>
                            <div className={styles.layoutGridItem}>col-6</div>
                        </Col>
                    </Row>
                    <h3>push/pull</h3>
                    <Row>
                        <Col span={18} push={9}>
                            <div className={styles.layoutGridItem}>col-18</div>
                        </Col>
                        <Col span={6} pull={12}>
                            <div className={styles.layoutGridItem}>col-6</div>
                        </Col>
                    </Row>
                    <h3>flex</h3>
                    <h4>justify='start'</h4>
                    <Row type="flex" justify="start">
                        <Col span={4}>
                            <div className={styles.layoutGridItem}>col-4</div>
                        </Col>
                        <Col span={4}>
                            <div className={styles.layoutGridItem}>col-4</div>
                        </Col>
                        <Col span={4}>
                            <div className={styles.layoutGridItem}>col-4</div>
                        </Col>
                        <Col span={4}>
                            <div className={styles.layoutGridItem}>col-4</div>
                        </Col>
                    </Row>
                    <h4>justify='center'</h4>
                    <Row type="flex" justify="center">
                        <Col span={4}>
                            <div className={styles.layoutGridItem}>col-4</div>
                        </Col>
                        <Col span={4}>
                            <div className={styles.layoutGridItem}>col-4</div>
                        </Col>
                        <Col span={4}>
                            <div className={styles.layoutGridItem}>col-4</div>
                        </Col>
                        <Col span={4}>
                            <div className={styles.layoutGridItem}>col-4</div>
                        </Col>
                    </Row>
                    <h4>justify='end'</h4>
                    <Row type="flex" justify="end">
                        <Col span={4}>
                            <div className={styles.layoutGridItem}>col-4</div>
                        </Col>
                        <Col span={4}>
                            <div className={styles.layoutGridItem}>col-4</div>
                        </Col>
                        <Col span={4}>
                            <div className={styles.layoutGridItem}>col-4</div>
                        </Col>
                        <Col span={4}>
                            <div className={styles.layoutGridItem}>col-4</div>
                        </Col>
                    </Row>
                    <h4>justify='space-between'</h4>
                    <Row type="flex" justify="space-between">
                        <Col span={4}>
                            <div className={styles.layoutGridItem}>col-4</div>
                        </Col>
                        <Col span={4}>
                            <div className={styles.layoutGridItem}>col-4</div>
                        </Col>
                        <Col span={4}>
                            <div className={styles.layoutGridItem}>col-4</div>
                        </Col>
                        <Col span={4}>
                            <div className={styles.layoutGridItem}>col-4</div>
                        </Col>
                    </Row>
                    <h4>justify='space-around'</h4>
                    <Row type="flex" justify="space-around">
                        <Col span={4}>
                            <div className={styles.layoutGridItem}>col-4</div>
                        </Col>
                        <Col span={4}>
                            <div className={styles.layoutGridItem}>col-4</div>
                        </Col>
                        <Col span={4}>
                            <div className={styles.layoutGridItem}>col-4</div>
                        </Col>
                        <Col span={4}>
                            <div className={styles.layoutGridItem}>col-4</div>
                        </Col>
                    </Row>
                    <p>Align Top</p>
                    <Row type="flex" justify="center" align="top">
                        <Col span={4}>
                            <DemoBox value={100}>col-4</DemoBox>
                        </Col>
                        <Col span={4}>
                            <DemoBox value={50}>col-4</DemoBox>
                        </Col>
                        <Col span={4}>
                            <DemoBox value={120}>col-4</DemoBox>
                        </Col>
                        <Col span={4}>
                            <DemoBox value={80}>col-4</DemoBox>
                        </Col>
                    </Row>

                    <p>Align Center</p>
                    <Row type="flex" justify="space-around" align="middle">
                        <Col span={4}>
                            <DemoBox value={100}>col-4</DemoBox>
                        </Col>
                        <Col span={4}>
                            <DemoBox value={50}>col-4</DemoBox>
                        </Col>
                        <Col span={4}>
                            <DemoBox value={120}>col-4</DemoBox>
                        </Col>
                        <Col span={4}>
                            <DemoBox value={80}>col-4</DemoBox>
                        </Col>
                    </Row>

                    <p>Align Bottom</p>
                    <Row type="flex" justify="space-between" align="bottom">
                        <Col span={4}>
                            <DemoBox value={100}>col-4</DemoBox>
                        </Col>
                        <Col span={4}>
                            <DemoBox value={50}>col-4</DemoBox>
                        </Col>
                        <Col span={4}>
                            <DemoBox value={120}>col-4</DemoBox>
                        </Col>
                        <Col span={4}>
                            <DemoBox value={80}>col-4</DemoBox>
                        </Col>
                    </Row>
                    <h3>Order</h3>
                    <Row type="flex">
                        <Col span={6} order={4}><DemoBox1>1 col-order-4</DemoBox1></Col>
                        <Col span={6} order={3}><DemoBox1>2 col-order-3</DemoBox1></Col>
                        <Col span={6} order={2}><DemoBox1>3 col-order-2</DemoBox1></Col>
                        <Col span={6} order={1}><DemoBox1>4 col-order-1</DemoBox1></Col>
                    </Row>
                </div>
            </Content>
        </div>
    )
}

export default Grid