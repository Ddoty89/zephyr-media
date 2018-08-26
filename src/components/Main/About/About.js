import React from 'react';

import WhoWeAre from'./WhoWeAre';
import './About.css';

function About(props) {
	return (
		<div className='about'>
			<h2>About</h2>
			<p className='aboutDescription'>Zephyr Media is an up and coming media company with its roots in aerial photography and videography for real estate, using the most current UAV’s for filming and software for editing.</p>
			<WhoWeAre />
		</div>
	)
}

export default About