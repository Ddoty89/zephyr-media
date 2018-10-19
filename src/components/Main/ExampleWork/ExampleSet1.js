import React from "react";
import { Fade } from "react-slideshow-image";

const exampleSet1 = [
  "https://github.com/Ddoty89/Images-for-Zephyr-Media/blob/master/Zephra%20Media%20Photo%201.jpg?raw=true",
  "https://github.com/Ddoty89/Images-for-Zephyr-Media/blob/master/Zephyr%20Media%20Photo%204.jpg?raw=true",
  "https://github.com/Ddoty89/Images-for-Zephyr-Media/blob/master/Zephyr%20Media%20Photo%207.jpg?raw=true",
  "https://github.com/Ddoty89/Images-for-Zephyr-Media/blob/master/Zephyr%20Media%20Photo%2010.jpg?raw=true",
  "https://github.com/Ddoty89/Images-for-Zephyr-Media/blob/master/Zephyr%20Media%20Photo%2013.jpg?raw=true"
];

const fadeProperties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true
};

const ExampleSet1 = () => {
  return (
    <Fade {...fadeProperties}>
      <div className="each-fade">
        <div className="image-container">
          <img className="image1" alt="First Slide" src={exampleSet1[0]} />
        </div>
      </div>
      <div className="each-fade">
        <div className="image-container">
          <img className="image2" alt="First Slide" src={exampleSet1[1]} />
        </div>
      </div>
      <div className="each-fade">
        <div className="image-container">
          <img className="image2 " alt="First Slide" src={exampleSet1[2]} />
        </div>
      </div>
      <div className="each-fade">
        <div className="image-container">
          <img className="image4" alt="First Slide" src={exampleSet1[3]} />
        </div>
      </div>
      <div className="each-fade">
        <div className="image-container">
          <img className="image5" alt="First Slide" src={exampleSet1[4]} />
        </div>
      </div>
    </Fade>
  );
};

export default ExampleSet1;
