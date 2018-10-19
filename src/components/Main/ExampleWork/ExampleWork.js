import React from "react";
import ReactPlayer from "react-player";

import ExampleSet1 from "./ExampleSet1";
import ExampleSet2 from "./ExampleSet2";
import ExampleSet3 from "./ExampleSet3";
import "./ExampleWork.css";

function ExampleWork(props) {
  return (
    <div className="examples">
      <div className="exampleSlides">
        <div className="example1">
          <ExampleSet1 />
        </div>
        <div className="example2">
          <ExampleSet2 />
        </div>
        <div className="example3">
          <ExampleSet3 />
        </div>
      </div>
      <div className="exampleVideos">
        <ReactPlayer
          className="exampleVideo1"
          url="https://youtu.be/278Iq24BCwg"
          playing
          autoPlay
          height="250px"
          width="445px"
          loop
          preload="true"
          muted
        />
        <ReactPlayer
          className="exampleVideo2"
          url="https://youtu.be/3brA3BHPJDA"
          playing
          autoPlay
          height="250px"
          width="445px"
          loop
          preload="true"
          muted
        />
      </div>
    </div>
  );
}

export default ExampleWork;
