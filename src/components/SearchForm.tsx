import React, { useEffect, useState } from "react";
import { getColorScheme } from "../services/api.service";
import { Color } from "../types/color.types";
import ColorPlay from "./ColorPlay";
import PaletteDisplay from "./PaletteDisplay";

export default function SearchForm() {
  const [colors, setColors] = useState<Color[]>([]);
  const [inputMood, setInputMood] = useState("");
  const [mood, setMood] = useState("calm");
  const [userInput, setUserInput] = useState("");

  useEffect(() => {
    getColors();
  }, []);

  function getColors() {
    getColorScheme("180,20,150").then((response) => {
      console.log("GetColors response: ", response.data.colors);
      setColors(response.data.colors);
      console.log("Colors after setColors: ", colors);
    });
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setUserInput(e.target.value);
  }

  function handleMoodChange(e: React.ChangeEvent<HTMLSelectElement>) {
    setInputMood(e.target.value);
    console.log("Mood in change handler: ", inputMood);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (inputMood === "calm") {
      setMood(createRGB(60, 0, 60, 0, 255, 200));
    }
    if (inputMood === "energetic") {
      setMood(createRGB(255, 200, 255, 200, 0, 0));
    }
    if (inputMood === "powerful") {
      setMood(createRGB(255, 200, 60, 0, 60, 0));
    }
    getColorScheme(mood).then((response) => {
      setColors(response.data.colors);
    });
  }

  function createRGB(
    rMax: number,
    rMin: number,
    gMax: number,
    gMin: number,
    bMax: number,
    bMin: number
  ) {
    const r = Math.round(Math.random() * (rMax - rMin) + rMin);
    const g = Math.round(Math.random() * (gMax - gMin) + gMin);
    const b = Math.round(Math.random() * (bMax - bMin) + bMin);

    return `${r}, ${g}, ${b}`;
  }

  return (
    <div>
      <div className="theColorAPI">
        <h1>The Color API Testing</h1>
        <form action="">
          {/* <label>Color Search</label>
          <input
            type="text"
            className="border-solid border-1 border-black"
            id="inputColor"
            value={userInput}
            onChange={handleChange}
          /> */}
          <label htmlFor="">Select a Mood</label>
          <select name="mood" id="mood" onChange={handleMoodChange}>
            <option value="energetic">Energetic</option>
            <option value="powerful">Powerful</option>
            <option value="calm">Calm</option>
          </select>
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
      {/* <ColorPlay /> */}
    </div>
  );
}
