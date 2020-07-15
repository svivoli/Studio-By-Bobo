import React from 'react';
import DrawingsNavigation from '../components/DrawingsNavigation';
import CornerImageHome from '../components/CornerImageHome';
import DrawingsSlider from '../components/DrawingsSlider';
import { Row, Col } from 'antd';

function DrawingsHome() {
    return (
        <div>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col className="gutter-row" span={5}>
                    <DrawingsNavigation className="sider" />
                </Col>
                <Col className="carousel gutter-row" span={19}>
                    <DrawingsSlider />
                </Col>
            </Row>
            <CornerImageHome />
        </div>
    )
};

export default DrawingsHome;