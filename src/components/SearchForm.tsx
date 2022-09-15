import React, { useEffect, useState } from "react";
import { getColorScheme } from "../services/api.service";
import PaletteDisplay from "./PaletteDisplay";

export default function SearchForm() {
  const [colors, setColors] = useState([]);
  const [userInput, setUserInput] = useState("");

  useEffect(() => {
    getColors();
  }, []);

  function getColors() {
    getColorScheme("180,20,150").then((response) => {
      console.log(response.data.colors);
      setColors(response.data.colors);
      console.log(colors);
    });
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setUserInput(e.target.value);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log("submit button clicked");
    console.log(userInput);
    getColorScheme(userInput).then((response) => {
      setColors(response.data.colors);
      console.log("colors on submit: ", colors);
    });
  }

  return (
    <div>
      <div className="theColorAPI">
        <h1>The Color API Testing</h1>
        <form action="">
          <label>Color Search</label>
          <input
            type="text"
            className="border-solid border-1 border-black"
            id="inputColor"
            value={userInput}
            onChange={handleChange}
          />
          <button id="scheme-button" type="submit" onClick={handleSubmit}>
            Get Color Scheme
          </button>
        </form>
        <div className="color-container">
          {colors.map((color, index) => (
            <PaletteDisplay key={index} color={color} />
          ))}
        </div>
      </div>
    </div>
  );
}
