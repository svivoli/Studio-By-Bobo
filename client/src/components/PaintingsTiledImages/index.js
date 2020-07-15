import React from 'react';
import { Row, Col } from 'antd';

const DrawingsTiledImages = () => (
    <div className="tiles">
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row" span={12}>
                <Div>
                    <img src={require('../../img/rythmedecouleurII.jpg')} alt=" "></img>
                    <Div2>
                        <p>rythme de couleur</p>
                        <p>acrylic on stretched canvas</p>
                        {/* <a className="info-link" href="https://www.etsy.com/listing/822984031/girl-sitting?ref=shop_home_active_10&frs=1" target="_blank" rel="noopener noreferrer">purchase on Etsy</a> */}
                    </Div2>
                </Div>
            </Col>
            <Col className="gutter-row" span={12}>
                <Div>
                    <img src={require('../../img/milano.jpeg')} alt=" "></img>
                    <Div2>
                        <p>milano</p>
                        <p>acrylic on stretched canvas</p>
                        {/* <a className="info-link" href="https://www.etsy.com/listing/797407812/girl-at-cafe?ref=shop_home_active_24&frs=1" target="_blank" rel="noopener noreferrer">purchase on Etsy</a> */}
                    </Div2>
                </Div>
            </Col>

        </Row>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row" span={12}>
                <Div>
                    <img src={require('../../img/barcelona.jpeg')} alt=" "></img>
                    <Div2>
                        <p>barcelona</p>
                        <p>acrylic on stretched canvas</p>
                        {/* <a className="info-link" href="https://www.etsy.com/listing/809087050/vase-of-ranunculuses?ref=shop_home_active_9&frs=1" target="_blank" rel="noopener noreferrer">purchase on Etsy</a> */}
                    </Div2>
                </Div>
            </Col>
            {/* <Col className="gutter-row" span={12}>
                <Div>
                    <img src={require('../../img/girlwithfruit.png')} alt=" "></img>
                    <Div2>
                        <p>girl holding fruit</p>
                        <p>ink and gouache on paper</p>
                        <a className="info-link" href="https://www.etsy.com/listing/809084410/girl-holding-fruit?ref=shop_home_active_11&frs=1" target="_blank" rel="noopener noreferrer">purchase on Etsy</a>
                    </Div2>
                </Div>
            </Col> */}
        </Row>
        {/* <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row" span={12}>
                <Div>
                    <img src={require('../../img/girlinpool2019.png')} alt=" "></img>
                    <Div2>
                        <p>girl in pool</p>
                        <p>ink and gouache on paper</p> */}
        {/* <a className="info-link" href="#" target="_blank">www.etsylink.com</a> */}
        {/* </Div2>
                </Div>
            </Col>
            <Col className="gutter-row" span={12}>
                <Div>
                    <img src={require('../../img/jaroflilliesandpoppies.png')} alt=" "></img>
                    <Div2>
                        <p>jar of lillies and poppies</p>
                        <p>ink and gouache on paper</p>
                        <a className="info-link" href="https://www.etsy.com/listing/812210140/jar-of-lilies-and-poppies?ref=shop_home_active_4&frs=1" target="_blank" rel="noopener noreferrer">purchase on Etsy</a>
                    </Div2>
                </Div>
            </Col>
        </Row>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row" span={12}>
                <Div>
                    <img src={require('../../img/stilllifeofvases.png')} alt=" "></img>
                    <Div2>
                        <p>study of vases</p>
                        <p>ink and gouache on paper</p>
                        <a className="info-link" href="https://www.etsy.com/listing/826109919/study-of-vases?ref=shop_home_active_5&frs=1" target="_blank" rel="noopener noreferrer">purchase on Etsy</a>
                    </Div2>
                </Div>
            </Col>
            <Col className="gutter-row" span={12}>
                <Div>
                    <img src={require('../../img/summerroses2020.png')} alt=" "></img>
                    <Div2>
                        <p>summer roses</p>
                        <p>ink and gouache on paper</p> */}
        {/* <a className="info-link" href="#" target="_blank">www.etsylink.com</a> */}
        {/* </Div2>
                </Div>
            </Col>
        </Row> */}
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
        this.setState({ color: 'white' });
        this.setState({ background: 'rgba(80, 80, 80, 0.5)' });
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

export default DrawingsTiledImages;