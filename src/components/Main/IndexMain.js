import React from 'react';

import About from './About/About';
import Services from './Services/Services';
import ExampleWork from './ExampleWork/ExampleWork';

import './IndexMain.css';
import './MainResponsiveDesign.css'

function IndexMain(props) {
	return (
		<div className='main'>
			<About />
			<Services />
			<ExampleWork />
			<p className='emailDescription'>For questions or inquiries on service pricing please contact <a  className='email' href="mailto:Elias.r.fowler@gmail.com?subject=Zephyr Media">Elias Folwer</a></p>
		</div>
	)
}

export default IndexMain