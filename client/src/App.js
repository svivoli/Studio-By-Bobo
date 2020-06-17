import React from 'react';
import ReactDOM from 'react-dom';
import Sider from './components/Sider';
import CornerImage from './components/CornerImage';
import Slider from './components/Slider';
import { Row, Col } from 'antd';
import './App.css';

function App() {
  return (
    <div>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className="gutter-row" span={5}>
          <Sider className="sider" />
        </Col>
        <Col className="gutter-row" span={19}>
          <Slider />
        </Col>
      </Row>

      <CornerImage />

    </div>
  );
}

ReactDOM.render(<Sider />, document.getElementById('root'));

export default App;
