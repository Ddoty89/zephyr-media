import React from 'react';

import './HeaderVideo.css'
import ReactPlayer from 'react-player'
import HeaderImage from './HeaderImage'

class HeaderVideo extends React.Component {
  render () {
    return (
        <div className='headerContainer'>
            <   
            	ReactPlayer 
            	className='headerVideo'
            	url='https://youtu.be/TWvmUaTyC8E' 
            	playing
            	autoPlay
            	loop
                height='100%'
                width='100%'
            	preload='true'
        	/>
            <HeaderImage />
        </div>
    )
  }
}

export default HeaderVideo