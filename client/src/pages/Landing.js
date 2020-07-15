import React from 'react';
import { Affix } from 'antd';
import LogoLand from '../components/LogoLand';
import RawSocialIcons from '../components/RawSocialIcons';
import { Row, Col } from 'antd';

function Landing() {
    return (
        <div>
            <Affix>
            <Row className="landing-header" gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col className="gutter-row" span={21}>
                    <div className="landing-logo">
                        <LogoLand />
                    </div>
                </Col>
                <Col className="gutter-row" span={3}>
                <RawSocialIcons />
                </Col>
            </Row>
            </Affix>
            <div className="landing-img">
                <img src={require("../img/girlinpool.jpg")} alt=" "></img>
                <div className="enter-drawings">
                    <a href="/drawingshome"><h1>enter drawings</h1></a>
                </div>
                <div className="enter-paintings">
                    <a href="/paintingshome"><h1>enter paintings</h1></a>
                </div>
            </div>
        </div>
    )
};

export default Landing;