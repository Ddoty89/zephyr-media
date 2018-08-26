import React from 'react';

import './WhoWeAre.css'

function WhoWeAre(props) {
	return (
		<div>
			<h2 className='whoWeAreTitle'>Who We Are</h2>
			<img
				className='profile'
				alt='Owner Profile' 
				src='https://github.com/Ddoty89/Images-for-Zephyr-Media/blob/master/E.%20Fowler.jpg?raw=true'/>
			<p className='profileDescription'>Over 10 years of government (DOD) experience, most of which overseas operating 3 different platforms, Elias brings his military mindset and drive for mission accomplishment to every endeavor. His knowledge is an integral part to our company’s success and is a cornerstone in our foundation.</p>
		</div>
	)
}

export default WhoWeAre