import { response } from "express";
import React, { useContext, useEffect, useState } from "react";
import { getColorScheme } from "../services/color.api.service";
import { Color } from "../types/color.types";
import ColorPlay from "./ColorPlay";
import PaletteDisplay from "./PaletteDisplay";
import { PaletteContext } from "../context/palette.context";
import { Palette } from "../types/palette.types";

export default function SearchForm() {
  const { palette, setPalette } = useContext(PaletteContext);

  const [colors, setColors] = useState<Color[]>([]);
  const [analogColors, setAnalogColors] = useState<Color[]>([]);
  const [complementColors, setComplementColors] = useState<Color[]>([]);
  const [inputMood, setInputMood] = useState("calm");
  const [mood, setMood] = useState("180,80%,80%");
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
    getColorScheme("180,80%,80%").then((response) => {
      setColors(response.data.colors);
      setPalette({
        ...palette,
        primaryColor: response.data.colors[0],
        secondaryColor: response.data.colors[1],
        tertiaryColor: response.data.colors[2],
      });
    });
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setUserInput(e.target.value);
  }

  function handleMoodChange(e: React.ChangeEvent<HTMLSelectElement>) {
    setInputMood(e.target.value);
    if (e.target.value === "calm") {
      setMood(createHSL(165, 260, 80, 100, 50, 85));
    } else if (e.target.value === "energetic") {
      setMood(createHSL(45, 80, 80, 100, 50, 85));
    } else if (e.target.value === "powerful") {
      setMood(createHSL(20, 0, 80, 100, 50, 85));
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (inputMood === "calm") {
      if (Math.random() > 0.5) {
        setMood(createHSL(165, 260, 80, 100, 70, 95)); //blue
      } else {
        setMood(createHSL(75, 165, 80, 100, 70, 95)); //green
      }
    }

    if (inputMood === "energetic") {
      if (Math.random() > 0.5) {
        setMood(createHSL(45, 80, 80, 100, 70, 95)); //yellow
      } else {
        setMood(createHSL(20, 45, 80, 100, 70, 95)); //orange
      }
    }

    if (inputMood === "powerful") {
      if (Math.random() > 0.5) {
        setMood(createHSL(20, 0, 80, 100, 70, 95)); //red
      } else {
        setMood(createHSL(275, 310, 80, 100, 70, 95)); //purple
      }
    }

    getColorScheme(mood, "monochrome", 8).then((response) => {
      setColors(response.data.colors);
      setPalette({
        ...palette,
        primaryColor: response.data.colors[7].hsl.value,
        secondaryColor: response.data.colors[2].hsl.value,
      });
      return response;
    });

    getColorScheme(mood, "complement", 4).then((response) => {
      setAnalogColors(response.data.colors);
      setPalette({
        ...palette,
        tertiaryColor: response.data.colors[1].hsl.value,
      });
      return response;
    });
    // getColorScheme(mood, "complement", 2).then((response) => {
    //   setComplementColors(response.data.colors);
    // });
  }

  function saveTempPalette(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    setTempPalete({
      primaryColor: colors[3].rgb.value,
      secondaryColor: colors[7].rgb.value,
      tertiaryColor: analogColors[1].rgb.value,
    });

    //OPEN SAVE PALETTE FORM
  }

  function createHSL(
    hMax: number,
    hMin: number,
    sMax: number,
    sMin: number,
    lMax: number,
    lMin: number
  ) {
    const h = Math.round(Math.random() * (hMax - hMin) + hMin);
    const s = Math.round(Math.random() * (sMax - sMin) + sMin);
    const l = Math.round(Math.random() * (lMax - lMin) + lMin);
    return `${h},${s}%,${l}%`;
  }

  return (
    <div>
      <div className="theColorAPI flex flex-col items-center bg-white">
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
          <button onClick={saveTempPalette}>Save Color Palette</button>
        </form>
        <div className="palette flex flex-row">
          {colors.map((color, index) => (
            <PaletteDisplay key={index} color={color} />
          ))}

          {/* {analogColors.map((color, index) => (
            <PaletteDisplay key={index} color={color} />
          ))} */}

          {/* {complementColors.map((color, index) => (
            <PaletteDisplay key={index} color={color} />
          ))} */}
        </div>
      </div>
      {/* <ColorPlay /> */}
    </div>
  );
}
