import React from "react";
import { Fade } from "react-slideshow-image";

const exampleSet3 = [
  "https://github.com/Ddoty89/Images-for-Zephyr-Media/blob/master/Zephyr%20Media%20Photo%203.jpg?raw=true",
  "https://github.com/Ddoty89/Images-for-Zephyr-Media/blob/master/Zephyr%20Media%20Photo%206.jpg?raw=true",
  "https://github.com/Ddoty89/Images-for-Zephyr-Media/blob/master/Zephyr%20Media%20Photo%209.jpg?raw=true",
  "https://github.com/Ddoty89/Images-for-Zephyr-Media/blob/master/Zephyr%20Media%20Photo%2012.jpg?raw=true"
];

const fadeProperties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true
};

const ExampleSet3 = () => {
  return (
    <Fade {...fadeProperties}>
      <div className="each-fade">
        <div className="image-container">
          <img className="image1" alt="First Slide" src={exampleSet3[0]} />
        </div>
      </div>
      <div className="each-fade">
        <div className="image-container">
          <img className="image2" alt="First Slide" src={exampleSet3[1]} />
        </div>
      </div>
      <div className="each-fade">
        <div className="image-container">
          <img className="image3" alt="First Slide" src={exampleSet3[2]} />
        </div>
      </div>
      <div className="each-fade">
        <div className="image-container">
          <img className="image4" alt="First Slide" src={exampleSet3[3]} />
        </div>
      </div>
    </Fade>
  );
};

export default ExampleSet3;
