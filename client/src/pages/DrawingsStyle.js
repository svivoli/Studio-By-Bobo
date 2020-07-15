import React from 'react';
import DrawingsNavigation from '../components/DrawingsNavigation';
import DrawingsStyleBlurb from '../components/DrawingsStyleBlurb';
import { Row, Col } from 'antd';

function DrawingsStyle() {
    return (
        <div>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col className="gutter-row" span={5}>
                    <DrawingsNavigation className="sider" />
                </Col>
                <Col className="gutter-row" span={19}>
                    <DrawingsStyleBlurb />
                </Col>
            </Row>
        </div>
    )
};


export default DrawingsStyle;