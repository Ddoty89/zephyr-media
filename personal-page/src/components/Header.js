import React from 'react';
import Title from './Title';
import Navbar from './Navbar'

export function Header(props) {
	return (
		<div>
			<Title />
			<Navbar />
		</div>
	)
}

export default Header