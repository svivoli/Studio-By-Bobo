import React from 'react';
import ReactDOM from 'react-dom';
import Navigation from '../components/Navigation';
import Style from '../components/Style';
import { Row, Col } from 'antd';

function Home() {
    return (
        <div>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col className="gutter-row" span={5}>
                    <Navigation className="sider" />
                </Col>
                <Col className="gutter-row" span={19}>
                    <Style />
                </Col>
            </Row>
        </div>
    )
};

ReactDOM.render(<Navigation />, document.getElementById('root'));

export default Home;