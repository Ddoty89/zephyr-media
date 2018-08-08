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
            	autoplay
            	loop
            	width='100%'
            	height='690px'
            	preload
        	/>
            <HeaderImage />
        </div>
    )
  }
}

export default HeaderVideo