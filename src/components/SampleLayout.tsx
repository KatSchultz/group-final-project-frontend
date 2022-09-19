import React from "react";
import rays from "../images/rays.jpg";

export default function SampleLayout() {
  return (
    <div className="container flex flex-col items-center content-center mx-auto">
      <div className="w-8/12 p-4">
        <img src={rays} alt="" />
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur
          magnam omnis dignissimos delectus esse doloremque? Optio incidunt
          dolore facilis, consectetur explicabo, laudantium aperiam nostrum
          suscipit aspernatur quod saepe sapiente id voluptatibus, reiciendis
          asperiores praesentium eum dolorum blanditiis iste delectus labore.
          Officiis numquam odio cumque dignissimos esse aspernatur id obcaecati
          at.
        </p>
      </div>
    </div>
  );
}
