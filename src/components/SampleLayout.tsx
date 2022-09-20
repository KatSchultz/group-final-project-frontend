import React, { useContext } from "react";
import rays from "../images/rays.jpg";
import { PaletteContext } from "../context/palette.context";

export default function SampleLayout() {
  const { palette } = useContext(PaletteContext);
  const divStyles = {
    backgroundColor: `white`,
  };
  const borderStyles = {
    border: `4px solid ${palette.secondaryColor}`,
  };
  const buttonStyle = {
    // border: ` 3px solid ${palette.}`,
    backgroundColor: `${palette.primaryColor}`,
    border: `2px solid ${palette.tertiaryColor}`,
  };

  return (
    <div
      className="sample-layout w-9/12 p-6 m-6 flex flex-col items-center content-center mx-auto rounded-2xl shadow-xl"
      style={divStyles}
    >
      <img src={rays} alt="" style={borderStyles} />
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur
        magnam omnis dignissimos delectus esse doloremque? Optio incidunt dolore
        facilis, consectetur explicabo, laudantium aperiam nostrum suscipit
        aspernatur quod saepe sapiente id voluptatibus.
      </p>
      <div className="call-to-action flex justify-center items-center">
        <p>Press this button for more info</p>
        <button style={buttonStyle} className="p-2 m-2 rounded-lg">
          Click Me!
        </button>
      </div>
    </div>
  );
}
