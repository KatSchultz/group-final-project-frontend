import React, { useContext } from "react";
import rays from "../images/rays.jpg";
import { PaletteContext } from "../context/palette.context";

export default function SampleLayout() {
  const { palette } = useContext(PaletteContext);
  const divStyles = {
    backgroundColor: `${palette.primaryColor}`,
  };
  const borderStyles = {
    border: `4px solid ${palette.secondaryColor}`,
  };
  const buttonStyle = {
    backgroundColor: `${palette.tertiaryColor}`,
  };
  return (
    <div
      className="w-8/12 p-4 m-8 flex flex-col items-center content-center mx-auto rounded-2xl shadow-xl"
      style={divStyles}
    >
      <img src={rays} alt="" style={borderStyles} />
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur
        magnam omnis dignissimos delectus esse doloremque? Optio incidunt dolore
        facilis, consectetur explicabo, laudantium aperiam nostrum suscipit
        aspernatur quod saepe sapiente id voluptatibus, reiciendis asperiores
        praesentium eum dolorum blanditiis iste delectus labore. Officiis
        numquam odio cumque dignissimos esse aspernatur id obcaecati at.
      </p>
      <div className="call-to-action flex justify-center items-center">
        <p>Press this button for more info</p>
        <button style={buttonStyle} className="p-2 m-2">
          Click Me!
        </button>
      </div>
    </div>
  );
}
