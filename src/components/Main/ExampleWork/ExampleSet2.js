import React from "react";
import { Fade } from "react-slideshow-image";

const exampleSet2 = [
  "https://github.com/Ddoty89/Images-for-Zephyr-Media/blob/master/Zephyr%20Media%20Photo%202.jpg?raw=true",
  "https://github.com/Ddoty89/Images-for-Zephyr-Media/blob/master/Zephyr%20Media%20Photo%205.jpg?raw=true",
  "https://github.com/Ddoty89/Images-for-Zephyr-Media/blob/master/Zephyr%20Media%20Photo%208.jpg?raw=true",
  "https://github.com/Ddoty89/Images-for-Zephyr-Media/blob/master/Zephyr%20Media%20Photo%2011.jpg?raw=true",
  "https://github.com/Ddoty89/Images-for-Zephyr-Media/blob/master/Zephyr%20Media%20Photo%2014.jpg?raw=true"
];

const fadeProperties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true
};

const ExampleSet2 = () => {
  return (
    <Fade {...fadeProperties}>
      <div className="each-fade">
        <div className="image-container">
          <img className="image1" alt="Second Slide" src={exampleSet2[0]} />
        </div>
      </div>
      <div className="each-fade">
        <div className="image-container">
          <img className="image2" alt="Second Slide" src={exampleSet2[1]} />
        </div>
      </div>
      <div className="each-fade">
        <div className="image-container">
          <img className="image2 " alt="Second Slide" src={exampleSet2[2]} />
        </div>
      </div>
      <div className="each-fade">
        <div className="image-container">
          <img className="image4" alt="Second Slide" src={exampleSet2[3]} />
        </div>
      </div>
      <div className="each-fade">
        <div className="image-container">
          <img className="image5" alt="Second Slide" src={exampleSet2[4]} />
        </div>
      </div>
    </Fade>
  );
};

export default ExampleSet2;
