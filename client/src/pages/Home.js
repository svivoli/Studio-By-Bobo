import React from 'react';
import ReactDOM from 'react-dom';
import Sider from '../components/Sider';
import CornerImage from '../components/CornerImage';
import Slider from '../components/Slider';
import TiledImages from '../components/TiledImages';
import { Row, Col } from 'antd';

function Home() {
    return (
        <div>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col className="gutter-row" span={5}>
                    <Sider className="sider" />
                </Col>
                <Col className="gutter-row" span={19}>
                    <TiledImages />
                </Col>
            </Row>
            <CornerImage />
        </div>
    )
};

ReactDOM.render(<Sider />, document.getElementById('root'));

export default Home;