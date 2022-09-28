import React, { useContext, useState } from "react";
import rays from "../images/rays.jpg";
import balls from "../images/balls.jpg";
import { PaletteContext } from "../context/palette.context";

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

  // function imageRandomizer() {
  //   if (Math.random() > 0.5) {
  //     return rays;
  //   } else return balls;
  // }

  return (
    <div
      className="sample-layout flex flex-col items-center content-center p-6 m-6 w-9/12 mx-auto rounded-2xl shadow-xl"
      style={divStyles}
    >
      <img src={rays} alt="" style={imageStyles} className="image" />
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur
        magnam omnis dignissimos delectus esse doloremque? Optio incidunt dolore
        facilis, consectetur explicabo, laudantium aperiam nostrum suscipit
        aspernatur quod saepe sapiente id voluptatibus.
      </p>
      <div className="call-to-action flex justify-center items-center">
        <p>Contrasting colors will draw attention to buttons</p>
        <button style={buttonStyle} className="p-2 m-2 rounded-lg">
          Click Me!
        </button>
      </div>
    </div>
  );
}
