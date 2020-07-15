import React from 'react';
import { Carousel } from 'antd';

function Slider() {

  return (
    <Carousel className="slider" autoplay>
        <div>
          <img src={require('../../img/1.png')} alt=" "></img>
        </div>
        <div>
          <img src={require('../../img/2.png')} alt=" "></img>
        </div>
        <div>
          <img src={require('../../img/3.png')} alt=" "></img>
        </div>
        <div>
          <img src={require('../../img/4.png')} alt=" "></img>
        </div>
        <div>
          <img src={require('../../img/5.png')} alt=" "></img>
        </div>
        <div>
          <img src={require('../../img/6.png')} alt=" "></img>
        </div>
        <div>
          <img src={require('../../img/7.png')} alt=" "></img>
        </div>
        <div>
          <img src={require('../../img/8.png')} alt=" "></img>
        </div>
    </Carousel>
  )
}

export default Slider;