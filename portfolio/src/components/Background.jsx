import React, { Fragment } from 'react';
import rain from '../assets/rain.mp4';
import './background.scss';

const Background = (props) => {

  return (

    <>
      <video autoPlay muted loop id="backgroundVideo">
        <source src={rain} type="video/mp4"></source>
      </video>
    </>

  )
}

export default Background;