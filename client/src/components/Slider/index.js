import React from 'react';
import { Carousel } from 'antd';

function Slider() {

  return (
    <Carousel className="slider" autoplay>
        <div>
          <img src={require('../../img/1.png')}></img>
        </div>
        <div>
          <img src={require('../../img/2.png')}></img>
        </div>
        <div>
          <img src={require('../../img/3.png')}></img>
        </div>
        <div>
          <img src={require('../../img/4.png')}></img>
        </div>
    </Carousel>
  )
}

export default Slider;