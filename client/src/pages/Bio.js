import React from 'react';
import DrawingsNavigation from '../components/DrawingsNavigation';
import BioBlurb from '../components/BioBlurb';
import { Row, Col } from 'antd';

function Bio() {
    return (
        <div>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col className="gutter-row" span={5}>
                    <DrawingsNavigation className="sider" />
                </Col>
                <Col className="gutter-row" span={19}>
                    <BioBlurb />
                </Col>
            </Row>
        </div>
    )
};


export default Bio;