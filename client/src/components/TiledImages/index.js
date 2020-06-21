import React, { useState } from 'react';
import { Row, Col } from 'antd';

const TiledImages = () => (
    <div className="tiles">
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row" span={12}>
                <Div>
                    <img src={require('../../img/fleurs.jpeg')}></img>
                    <Div2>
                        <p>fleurs</p>
                        <p>medium</p>
                        <a className="info-link" href="#">www.etsy.com</a>
                    </Div2>
                </Div>
            </Col>
            <Col className="gutter-row" span={12}>
                <Div>
                    <img src={require('../../img/girlatcafe.jpg')}></img>
                    <Div2>
                        <p>girl at cafe</p>
                        <p>medium</p>
                        <a className="info-link" href="#">www.etsylink.com</a>
                    </Div2>
                </Div>
            </Col>
            
        </Row>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row" span={12}>
                <Div>
                    <img src={require('../../img/girlsitting2019.jpeg')}></img>
                    <Div2>
                        <p>girl sitting</p>
                        <p>medium</p>
                        <a className="info-link" href="#">www.etsylink.com</a>
                    </Div2>
                </Div>
            </Col>
            <Col className="gutter-row" span={12}>
                <Div>
                    <img src={require('../../img/girlwithfruit.jpeg')}></img>
                    <Div2>
                        <p>girl with fruit</p>
                        <p>medium</p>
                        <a className="info-link" href="#">www.etsylink.com</a>
                    </Div2>
                </Div>
            </Col>
            </Row>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row" span={12}>
                <Div>
                    <img src={require('../../img/girlinpool2019.jpg')}></img>
                    <Div2>
                        <p>girl in pool</p>
                        <p>medium</p>
                        <a className="info-link" href="#">www.etsylink.com</a>
                    </Div2>
                </Div>
            </Col>
            <Col className="gutter-row" span={12}>
                <Div>
                    <img src={require('../../img/jaroflilliesandpoppies.jpg')}></img>
                    <Div2>
                        <p>jar of lillies and poppies</p>
                        <p>medium</p>
                        <a className="info-link" href="#">www.etsylink.com</a>
                    </Div2>
                </Div>
            </Col>
        </Row>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row" span={12}>
                <Div>
                    <img src={require('../../img/stilllifeofvases.jpeg')}></img>
                    <Div2>
                        <p>still life of vases</p>
                        <p>medium</p>
                        <a className="info-link" href="#">www.etsylink.com</a>
                    </Div2>
                </Div>
            </Col>
            <Col className="gutter-row" span={12}>
                <Div>
                    <img src={require('../../img/summerroses2020.jpg')}></img>
                    <Div2>
                        <p>summer roses</p>
                        <p>medium</p>
                        <a className="info-link" href="#">www.etsylink.com</a>
                    </Div2>
                </Div>
            </Col>
        </Row>
    </div>
)


class Div extends React.Component {
    render() {
        return (
            <div className="tile-img">
                {this.props.children}
            </div>
        )
    }
};

class Div2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            color: 'transparent',
            background: 'transparent'
        };

        this.handleMouseEnter = this.handleMouseEnter.bind(this);
        this.handleMouseLeave = this.handleMouseLeave.bind(this);
    }

    handleMouseEnter = () => {
        this.setState({ color: 'black' });
        this.setState({ background: 'rgba(80, 80, 80, 0.3)' });
        console.log(this.state.color);
    }

    handleMouseLeave = () => {
        this.setState({ color: 'transparent' });
        this.setState({ background: 'transparent' });
    }

    render() {
        return (
            <div className="info" style={{ color: `${this.state.color}`, backgroundColor: `${this.state.background}` }} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
                {this.props.children}
            </div>
        )
    }
}

export default TiledImages;