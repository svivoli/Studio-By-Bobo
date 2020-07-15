import React from 'react';
import DrawingsNavigation from '../components/DrawingsNavigation';
import CornerImageInquiries from '../components/CornerImageInquiries';
import SimpleContact from '../components/SimpleContact';
import { Row, Col } from 'antd';

function Home() {
    return (
        <div>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col className="gutter-row" span={5}>
                    <DrawingsNavigation className="sider" />
                </Col>
                <Col className="gutter-row" span={19}>
                    <SimpleContact />
                </Col>
            </Row>
            <CornerImageInquiries />
        </div>
    )
};


export default Home;