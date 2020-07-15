import React from 'react';
import ReactDOM from 'react-dom';
import Navigation from '../components/Navigation';
import CornerImageInquiries from '../components/CornerImageInquiries';
import SimpleContact from '../components/SimpleContact';
import { Row, Col } from 'antd';

function Home() {
    return (
        <div>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col className="gutter-row" span={5}>
                    <Navigation className="sider" />
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