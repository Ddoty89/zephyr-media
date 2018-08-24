import React from 'react';

import './ExampleWork.css'

function ExampleWork(props) {
	return (
		<div>
			<p>Here are some example of work done</p>

			<img
				className='image1'
				alt='First Example'
				src='https://github.com/Ddoty89/Images-for-Zephyr-Media/blob/master/Zephra%20Media%20Photo%201.jpg?raw=true'/>
			<img
				className='image3' 
				alt='Second Example'
				src='https://github.com/Ddoty89/Images-for-Zephyr-Media/blob/master/Zephyr%20Media%20Photo%203.jpg?raw=true'/>
			<img
				className='image9' 
				alt='Third Example'
				src='https://github.com/Ddoty89/Images-for-Zephyr-Media/blob/master/Zephyr%20Media%20Photo%209.jpg?raw=true'/>
		</div>
	)
}

export default ExampleWork