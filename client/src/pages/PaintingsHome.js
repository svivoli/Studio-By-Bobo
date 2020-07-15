import React from 'react';
import PaintingsNavigation from '../components/PaintingsNavigation';
import Slider from '../components/DrawingsSlider';
import { Row, Col } from 'antd';

function PaintingsHome() {
    return (
        <div>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col className="gutter-row" span={5}>
                    <PaintingsNavigation className="sider" />
                </Col>
                <Col className="carousel gutter-row" span={19}>
                    
                </Col>
            </Row>
        </div>
    )
};

export default PaintingsHome;