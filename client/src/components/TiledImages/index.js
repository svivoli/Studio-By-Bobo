import React from 'react';
import { Row, Col } from 'antd';

function TiledImages() {
    return (
        <div className="tiles">
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col className="gutter-row" span={8}>
                    <img src={require('../../img/1.png')}></img>
                </Col>
                <Col className="gutter-row" span={8}>
                    <img src={require('../../img/2.png')}></img>
                </Col>
                <Col className="gutter-row" span={8}>
                    <img src={require('../../img/3.png')}></img>
                </Col>
            </Row>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col className="gutter-row" span={8}>
                    <img src={require('../../img/4.png')}></img>
                </Col>
                <Col className="gutter-row" span={8}>
                    <img src={require('../../img/5.png')}></img>
                </Col>
                <Col className="gutter-row" span={8}>
                    <img src={require('../../img/6.png')}></img>
                </Col>
            </Row>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col className="gutter-row" span={8}>
                    <img src={require('../../img/7.png')}></img>
                </Col>
                <Col className="gutter-row" span={8}>
                    <img src={require('../../img/8.png')}></img>
                </Col>
                <Col className="gutter-row" span={8}>
                    <img src={require('../../img/9.png')}></img>
                </Col>
            </Row>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col className="gutter-row" span={8}>
                    <img src={require('../../img/10.png')}></img>
                </Col>
                <Col className="gutter-row" span={8}>
                    <img src={require('../../img/11.png')}></img>
                </Col>
                <Col className="gutter-row" span={8}>
                    <img src={require('../../img/12.png')}></img>
                </Col>
            </Row>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col className="gutter-row" span={8}>
                    <img src={require('../../img/13.png')}></img>
                </Col>
                <Col className="gutter-row" span={8}>
                    <img src={require('../../img/14.png')}></img>
                </Col>
                <Col className="gutter-row" span={8}>
                    <img src={require('../../img/15.png')}></img>
                </Col>
            </Row>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col className="gutter-row" span={8}>
                    <img src={require('../../img/16.png')}></img>
                </Col>
                <Col className="gutter-row" span={8}>
                    <img src={require('../../img/17.png')}></img>
                </Col>
                <Col className="gutter-row" span={8}>
                    <img src={require('../../img/18.png')}></img>
                </Col>
            </Row>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col className="gutter-row" span={8}>
                    <img src={require('../../img/19.png')}></img>
                </Col>
            </Row>
        </div>
    )
};

export default TiledImages;