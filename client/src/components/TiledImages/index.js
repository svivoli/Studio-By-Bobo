import React, { useState } from 'react';
import { Row, Col } from 'antd';

const TiledImages = () => (
    <div className="tiles">
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row" span={8}>
                <Div>
                    <img src={require('../../img/1.png')}></img>
                    <Div2>
                        <p>title</p>
                        <p>medium</p>
                        <a className="info-link" href="#">www.etsy.com</a>
                    </Div2>
                </Div>
            </Col>
            <Col className="gutter-row" span={8}>
                <Div>
                <img src={require('../../img/2.png')}></img>
                <Div2>
                    <p>title</p>
                    <p>medium</p>
                    <a className="info-link" href="#">www.etsylink.com</a>
                </Div2>
                </Div>
            </Col>
            <Col className="gutter-row" span={8}>
                <img src={require('../../img/3.png')}></img>
            </Col>
        </Row>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row" span={8}>
                <img src={require('../../img/4.png')}></img>
            </Col>
            <Col className="gutter-row" span={8}>
                <img src={require('../../img/5.png')}></img>
            </Col>
            <Col className="gutter-row" span={8}>
                <img src={require('../../img/6.png')}></img>
            </Col>
        </Row>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row" span={8}>
                <img src={require('../../img/7.png')}></img>
            </Col>
            <Col className="gutter-row" span={8}>
                <img src={require('../../img/8.png')}></img>
            </Col>
            <Col className="gutter-row" span={8}>
                <img src={require('../../img/9.png')}></img>
            </Col>
        </Row>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row" span={8}>
                <img src={require('../../img/10.png')}></img>
            </Col>
            <Col className="gutter-row" span={8}>
                <img src={require('../../img/11.png')}></img>
            </Col>
            <Col className="gutter-row" span={8}>
                <img src={require('../../img/12.png')}></img>
            </Col>
        </Row>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row" span={8}>
                <img src={require('../../img/13.png')}></img>
            </Col>
            <Col className="gutter-row" span={8}>
                <img src={require('../../img/14.png')}></img>
            </Col>
            <Col className="gutter-row" span={8}>
                <img src={require('../../img/15.png')}></img>
            </Col>
        </Row>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row" span={8}>
                <img src={require('../../img/16.png')}></img>
            </Col>
            <Col className="gutter-row" span={8}>
                <img src={require('../../img/17.png')}></img>
            </Col>
            <Col className="gutter-row" span={8}>
                <img src={require('../../img/18.png')}></img>
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
            background: 'transparent' };

        this.handleMouseEnter = this.handleMouseEnter.bind(this);
        this.handleMouseLeave = this.handleMouseLeave.bind(this);
    }

    handleMouseEnter = () => {
        this.setState({ color: 'black' });
        this.setState({ background: 'rgba(80, 80, 80, 0.3)'});
        console.log(this.state.color);
    }

    handleMouseLeave = () => {
        this.setState({ color: 'transparent' });
        this.setState({ background: 'transparent' });
    }

    render() {
        return (
            <div className="info" style={{ color: `${this.state.color}`,  backgroundColor: `${this.state.background}`}} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
                {this.props.children}
            </div>
        )
    }
}

export default TiledImages;