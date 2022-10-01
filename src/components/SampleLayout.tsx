import React, { useContext, useState } from "react";
import rays from "../images/rays.jpg";
import balls from "../images/balls.jpg";
import { PaletteContext } from "../context/palette.context";
import "./SampleLayout.css";

export default function SampleLayout() {
  const [imgState, setImgState] = useState("rays");
  const { palette } = useContext(PaletteContext);
  const divStyles = {
    backgroundColor: `white`,
  };
  const imageStyles = {
    backgroundColor: `${palette.primaryColor}`,
    border: `4px solid ${palette.secondaryColor}`,
  };

  const buttonStyle = {
    // border: ` 3px solid ${palette.}`,
    backgroundColor: `${palette.tertiaryColor}`,
    border: `2px solid ${palette.tertiaryColor}`,
  };

  const bigCircleStyle = {
    backgroundColor: `${palette.primaryColor}`,
  };
  const medCircleStyle = {
    backgroundColor: `${palette.secondaryColor}`,
  };
  const smCircleStyle = {
    backgroundColor: `${palette.secondaryColor}`,
  };
  // function imageRandomizer() {
  //   if (Math.random() > 0.5) {
  //     return rays;
  //   } else return balls;
  // }

  return (
    <div
      className="sample-layout flex flex-col items-center content-center p-6 m-6 w-9/12 mx-auto rounded-2xl shadow-xl md:flex-row"
      style={divStyles}
    >
      <div className="circles  ">
        <div className="circle" id="big-circle" style={bigCircleStyle}>
          <div className="circle" id="med-circle" style={medCircleStyle}></div>
          <div className="circle" id="sm-circle" style={smCircleStyle}></div>
        </div>
      </div>
      {/* <img src={rays} alt="" style={imageStyles} className="image" /> */}
      <div className="text-holder ">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur
          magnam omnis dignissimos delectus esse doloremque? Optio incidunt
          dolore facilis, consectetur explicabo, laudantium aperiam nostrum
          suscipit aspernatur quod saepe sapiente id voluptatibus.
        </p>
        <div className="call-to-action flex justify-center items-center">
          <p>Contrasting colors will draw attention to buttons</p>
          <button style={buttonStyle} className="p-2 m-2 rounded-lg">
            Click Me!
          </button>
        </div>
      </div>
    </div>
  );
}
