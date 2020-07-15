import React from 'react';
import DrawingsNavigation from '../components/DrawingsNavigation';
import Bio from '../components/Bio';
import { Row, Col } from 'antd';

function Home() {
    return (
        <div>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col className="gutter-row" span={5}>
                    <DrawingsNavigation className="sider" />
                </Col>
                <Col className="gutter-row" span={19}>
                    <Bio />
                </Col>
            </Row>
        </div>
    )
};


export default Home;