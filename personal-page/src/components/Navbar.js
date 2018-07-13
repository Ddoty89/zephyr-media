import React from 'react';
import './Navbar.css'

export function Navbar(props) {
	return (
		<div>
			<ul className='navBar'>
				<li>About</li>
				<li>Services</li>
				<li>Professional Work</li>
				<li>Contact</li>	
			</ul>
		</div>
	)
}

export default Navbar