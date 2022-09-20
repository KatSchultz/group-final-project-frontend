import React, { useContext } from "react";
import rays from "../images/rays.jpg";
import { PaletteContext } from "../context/palette.context";

export default function SampleLayout() {
  const { palette } = useContext(PaletteContext);
  const styles = {
    backgroundColor: `${palette.primaryColor}`,
  };
  return (
    <div
      className="w-8/12 p-4 m-4 flex flex-col items-center content-center mx-auto"
      style={styles}
    >
      <img src={rays} alt="" />
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur
        magnam omnis dignissimos delectus esse doloremque? Optio incidunt dolore
        facilis, consectetur explicabo, laudantium aperiam nostrum suscipit
        aspernatur quod saepe sapiente id voluptatibus, reiciendis asperiores
        praesentium eum dolorum blanditiis iste delectus labore. Officiis
        numquam odio cumque dignissimos esse aspernatur id obcaecati at.
      </p>
    </div>
  );
}
