import React from 'react';
import Logo from '../components/Logo';
import RawSocialIcons from '../components/RawSocialIcons';
import { Row, Col } from 'antd';

function Landing() {
    return (
        <div>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col className="gutter-row" span={21}>
                    <div className="landing-logo">
                        <Logo />
                    </div>
                </Col>
                <Col className="gutter-row" span={3}>
                <RawSocialIcons />
                </Col>
            </Row>
            <div className="landing-img">
                <img src={require("../img/girlinpool2019.jpg")}></img>
                <div className="enter">
                    <a href="/home"><h1>enter</h1></a>
                </div>
            </div>
        </div>
    )
};

export default Landing;