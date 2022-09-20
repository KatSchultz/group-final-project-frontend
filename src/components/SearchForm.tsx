import { response } from "express";
import React, { useContext, useEffect, useState } from "react";
import { getColorScheme } from "../services/color.api.service";
import { Color } from "../types/color.types";
import ColorPlay from "./ColorPlay";
import PaletteDisplay from "./PaletteDisplay";
import { PaletteContext } from "../context/palette.context";
import { Palette } from "../types/palette.types";

export default function SearchForm() {
  const setPalette = useContext(PaletteContext);

  const [colors, setColors] = useState<Color[]>([]);
  const [analogColors, setAnalogColors] = useState<Color[]>([]);
  const [complementColors, setComplementColors] = useState<Color[]>([]);
  const [inputMood, setInputMood] = useState("calm");
  const [mood, setMood] = useState("180,20,150");
  const [userInput, setUserInput] = useState("");
  const [tempPalette, setTempPalete] = useState({
    primaryColor: "",
    secondaryColor: "",
    tertiaryColor: "",
  });

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
      if (Math.random() > 0.5) {
        setMood(createRGB(0, 0, 255, 180, 120, 80));
      } else {
        setMood(createRGB(80, 0, 80, 0, 255, 180));
      }
    }
    if (inputMood === "energetic") {
      if (Math.random() > 0.5) {
        setMood(createRGB(255, 200, 255, 200, 40, 0));
      } else {
        setMood(createRGB(255, 200, 200, 100, 50, 0));
      }
    }
    if (inputMood === "powerful") {
      if (Math.random() > 0.5) {
        setMood(createRGB(255, 200, 60, 0, 60, 0));
      } else {
        setMood(createRGB(240, 140, 0, 0, 240, 140));
      }
    }
    getColorScheme(mood, "analogic", 5).then((response) => {
      setColors(response.data.colors);
    });
    getColorScheme(mood, "complement", 2).then((response) => {
      setAnalogColors(response.data.colors);
    });
    // getColorScheme(mood, "complement", 2).then((response) => {
    //   setComplementColors(response.data.colors);
    // });
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
      <div className="theColorAPI flex flex-col items-center">
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
            <option value="calm">Calm</option>
            <option value="energetic">Energetic</option>
            <option value="powerful">Powerful</option>
          </select>
          <button id="scheme-button" type="submit" onClick={handleSubmit}>
            Get Colors
          </button>
          <button>Save Color Palette</button>
        </form>
        <div className="palette flex flex-row">
          {colors.map((color, index) => (
            <PaletteDisplay key={index} color={color} />
          ))}

          {analogColors.map((color, index) => (
            <PaletteDisplay key={index} color={color} />
          ))}

          {complementColors.map((color, index) => (
            <PaletteDisplay key={index} color={color} />
          ))}
        </div>
      </div>
      {/* <ColorPlay /> */}
    </div>
  );
}
