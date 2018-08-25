import React from 'react';

import './HeaderVideo.css'
import ReactPlayer from 'react-player'
import HeaderImage from './HeaderImage'

class HeaderVideo extends React.Component {
  render () {
    return (
        <div className='header'>
            <   
            	ReactPlayer 
            	className='headerVideo'
            	url='https://youtu.be/TWvmUaTyC8E' 
            	playing
            	autoPlay
            	loop
            	width='100%'
            	height='690px'
            	preload='true'
        	/>
            <HeaderImage />
        </div>
    )
  }
}

export default HeaderVideo