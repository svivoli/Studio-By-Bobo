import React from 'react';
import { Carousel } from 'antd';

function PaintingsSlider() {

  return (
    <Carousel className="slider" autoplay>
        <div>
          <img src={require('../../img/barcelona.jpeg')} alt=" "></img>
        </div>
        <div>
          <img src={require('../../img/milano.jpeg')} alt=" "></img>
        </div>
        <div>
          <img src={require('../../img/rythmedecouleurII.jpg')} alt=" "></img>
        </div>
        {/* <div>
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
        </div> */}
    </Carousel>
  )
}

export default PaintingsSlider;