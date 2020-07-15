import React from 'react';
import DrawingsNavigation from '../components/DrawingsNavigation';
import CornerImageGallery from '../components/CornerImageGallery';
import TiledImages from '../components/TiledImages';
import { Row, Col } from 'antd';

function DrawingsGallery() {
    return(
        <div>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row" span={5}>
                <DrawingsNavigation className="sider" />
            </Col>
            <Col className="gutter-row" span={19}>
                <TiledImages />
            </Col>
        </Row>
        <CornerImageGallery />
    </div>
    )
};


export default DrawingsGallery;