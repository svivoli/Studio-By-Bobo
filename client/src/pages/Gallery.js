import React from 'react';
import ReactDOM from 'react-dom';
import Sider from '../components/Sider';
import CornerImageGallery from '../components/CornerImageGallery';
import TiledImages from '../components/TiledImages';
import { Row, Col } from 'antd';

function Gallery() {
    return(
        <div>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row" span={5}>
                <Sider className="sider" />
            </Col>
            <Col className="gutter-row" span={19}>
                <TiledImages />
            </Col>
        </Row>
        <CornerImageGallery />
    </div>
    )
};

ReactDOM.render(<Sider />, document.getElementById('root'));

export default Gallery;