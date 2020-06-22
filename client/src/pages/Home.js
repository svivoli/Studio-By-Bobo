import React from 'react';
import ReactDOM from 'react-dom';
import Navigation from '../components/Navigation';
import CornerImageHome from '../components/CornerImageHome';
import Slider from '../components/Slider';
import { Row, Col } from 'antd';

function Home() {
    return (
        <div>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col className="gutter-row" span={5}>
                    <Navigation className="sider" />
                </Col>
                <Col className="carousel gutter-row" span={19}>
                    <Slider />
                </Col>
            </Row>
            <CornerImageHome />
        </div>
    )
};

export default Home;