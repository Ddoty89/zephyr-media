import React from 'react';
import ReactPlayer from 'react-player'

import './ExampleWork.css'

function ExampleWork(props) {
	const exampleSet1 = [
		{picture:'https://github.com/Ddoty89/Images-for-Zephyr-Media/blob/master/Zephra%20Media%20Photo%201.jpg?raw=true'},
		{picture:'https://github.com/Ddoty89/Images-for-Zephyr-Media/blob/master/Zephyr%20Media%20Photo%204.jpg?raw=true'},
		{picture:'https://github.com/Ddoty89/Images-for-Zephyr-Media/blob/master/Zephyr%20Media%20Photo%207.jpg?raw=true'},
		{picture:'https://github.com/Ddoty89/Images-for-Zephyr-Media/blob/master/Zephyr%20Media%20Photo%2010.jpg?raw=true'},
		{picture:'https://github.com/Ddoty89/Images-for-Zephyr-Media/blob/master/Zephyr%20Media%20Photo%2013.jpg?raw=true'}
	]

	const exampleSet2 = [
		{picture:'https://github.com/Ddoty89/Images-for-Zephyr-Media/blob/master/Zephyr%20Media%20Photo%202.jpg?raw=true'},
		{picture:'https://github.com/Ddoty89/Images-for-Zephyr-Media/blob/master/Zephyr%20Media%20Photo%205.jpg?raw=true'},
		{picture:'https://github.com/Ddoty89/Images-for-Zephyr-Media/blob/master/Zephyr%20Media%20Photo%208.jpg?raw=true'},
		{picture:'https://github.com/Ddoty89/Images-for-Zephyr-Media/blob/master/Zephyr%20Media%20Photo%2011.jpg?raw=true'},
		{picture:'https://github.com/Ddoty89/Images-for-Zephyr-Media/blob/master/Zephyr%20Media%20Photo%2014.jpg?raw=true'}
	]

	const exampleSet3 = [
		{picture:'https://github.com/Ddoty89/Images-for-Zephyr-Media/blob/master/Zephyr%20Media%20Photo%203.jpg?raw=true'},
		{picture:'https://github.com/Ddoty89/Images-for-Zephyr-Media/blob/master/Zephyr%20Media%20Photo%206.jpg?raw=true'},
		{picture:'https://github.com/Ddoty89/Images-for-Zephyr-Media/blob/master/Zephyr%20Media%20Photo%209.jpg?raw=true'},
		{picture:'https://github.com/Ddoty89/Images-for-Zephyr-Media/blob/master/Zephyr%20Media%20Photo%2012.jpg?raw=true'}
	]

	return (
		<div className='examples'>
			<p>Here are some examples of work done</p>
			<div className='exampleImages'>
				<img
					className='image1'
					alt='First Example'
					src='https://github.com/Ddoty89/Images-for-Zephyr-Media/blob/master/Zephra%20Media%20Photo%201.jpg?raw=true'/>
				<img
					className='image2' 
					alt='Second Example'
					src='https://github.com/Ddoty89/Images-for-Zephyr-Media/blob/master/Zephyr%20Media%20Photo%203.jpg?raw=true'/>
				<img
					className='image3' 
					alt='Third Example'
					src='https://github.com/Ddoty89/Images-for-Zephyr-Media/blob/master/Zephyr%20Media%20Photo%209.jpg?raw=true'/>
				<img
					className='image4'
					alt='Fourth Example'
					src='https://github.com/Ddoty89/Images-for-Zephyr-Media/blob/master/Zephyr%20Media%20Photo%2013.jpg?raw=true'/>
				<img
					className='image5' 
					alt='Fifth Example'
					src='https://github.com/Ddoty89/Images-for-Zephyr-Media/blob/master/Zephyr%20Media%20Photo%2014.jpg?raw=true'/>
				<img
					className='image6' 
					alt='Sixth Example'
					src='https://github.com/Ddoty89/Images-for-Zephyr-Media/blob/master/Zephyr%20Media%20Photo%202.jpg?raw=true'/>
			</div>
			<div className='exampleVideos'>
            	<   
	            	ReactPlayer 
	            	className='exampleVideo1'
	            	url='https://youtu.be/278Iq24BCwg'
	            	playing
	            	autoPlay
	            	height='250px'
	            	width='445px'
	            	loop
	            	preload='true'
	        	/>
	        	<   
	            	ReactPlayer 
	            	className='exampleVideo2'
	            	url='https://youtu.be/3brA3BHPJDA'
	            	playing
	            	autoPlay
	            	height='250px'
	            	width='445px'
	            	loop
	            	preload='true'
	        	/>
        	</div>
		</div>
	)
}

export default ExampleWork