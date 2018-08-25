import React from 'react';

import About from './About/About';
import Services from './Services/Services';
import ExampleWork from './ExampleWork/ExampleWork';

import './IndexMain.css';

function IndexMain(props) {
	return (
		<div className='main'>
			<About />
			<Services />
			<ExampleWork />
		</div>
	)
}

export default IndexMain