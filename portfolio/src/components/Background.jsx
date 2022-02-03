import React, { Fragment } from 'react';
import background from '../assets/background.mp4';
import './background.scss';

const Background = (props) => {

  return (

    <>
      <video autoPlay muted loop id="backgroundVideo">
        <source src={background} type="video/mp4"></source>
      </video>
    </>

  )
}

export default Background;