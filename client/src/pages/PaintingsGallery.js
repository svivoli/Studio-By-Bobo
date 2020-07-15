import React from 'react';
import PaintingsNavigation from '../components/PaintingsNavigation';
import PaintingsTiledImages from '../components/PaintingsTiledImages';
import { Row, Col } from 'antd';

function DrawingsGallery() {
    return(
        <div>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row" span={5}>
                <PaintingsNavigation className="sider" />
            </Col>
            <Col className="gutter-row" span={19}>
                <PaintingsTiledImages />
            </Col>
        </Row>
    </div>
    )
};


export default DrawingsGallery;