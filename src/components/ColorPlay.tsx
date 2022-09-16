import { withTheme } from "@emotion/react";
import { disconnect } from "process";
import { stringify } from "querystring";
import React from "react";

//This is where i'm trying to figure out how to slightly randomize a color, but keep it in the same color family

export default function ColorPlay() {
  //   const red = rgb(150, 0, 0);
  //   const orange = rgb(255, 165, 0);
  //   const yellow = rgb(255, 255, 0);
  //   const green = rgb(0, 100, 0);
  //   const blue = rgb(0, 0, 255);
  //   const purple = rgb(128, 0, 128);

  function getRandomMaxNum() {
    return Math.random() * (255 - 200) + 200;
  }
  function getRandomMedNum() {
    return Math.random() * (200 - 100) + 100;
  }

  function getRandomMinNum() {
    return Math.random() * (60 - 0);
  }

  function createRed() {
    return `${getRandomMaxNum()}, ${getRandomMinNum()}, ${getRandomMinNum()}` as string;
  }
  function createOrange() {
    return `${getRandomMaxNum()}, ${getRandomMedNum()}, ${getRandomMinNum()}` as string;
  }

  function createYellow() {
    return `${getRandomMaxNum()}, ${getRandomMaxNum()}, 0` as string;
  }

  function createGreen() {
    return `0, ${getRandomMedNum()}, ${getRandomMinNum()}` as string;
  }

  function createBlue() {
    return `${getRandomMinNum()}, ${getRandomMinNum()}, ${getRandomMaxNum()}` as string;
  }

  function createPurple() {
    return `${getRandomMedNum()},0,${getRandomMedNum()}` as string;
  }
  let randomRed = createRed();
  let randomOrange = createOrange();
  let randomYellow = createYellow();
  let randomGreen = createGreen();
  let randomBlue = createBlue();
  let randomPurple = createPurple();

  const redStyles = {
    backgroundColor: `rgb(${randomRed})`,
    padding: 40,
    marginBottom: 10,
    fontSize: "2rem",

    color: "white",
  };

  const orangeStyles = {
    backgroundColor: `rgb(${randomOrange})`,
    padding: 40,
    marginBottom: 10,
    fontSize: "2rem",
    color: "white",
  };

  const yellowStyles = {
    backgroundColor: `rgb(${randomYellow})`,
    padding: 40,
    marginBottom: 10,
    fontSize: "2rem",

    color: "white",
  };

  const greenStyles = {
    backgroundColor: `rgb(${randomGreen})`,
    padding: 40,
    marginBottom: 10,
    fontSize: "2rem",

    color: "white",
  };

  const blueStyles = {
    backgroundColor: `rgb(${randomBlue})`,
    padding: 40,
    marginBottom: 10,
    fontSize: "2rem",

    color: "white",
  };

  const purpleStyles = {
    backgroundColor: `rgb(${randomPurple})`,
    padding: 40,
    marginBottom: 10,
    fontSize: "2rem",

    color: "white",
  };

  console.log("createBlue: ", randomBlue);
  return (
    <div>
      <div style={redStyles}>RED</div>
      <div style={orangeStyles}>ORANGE</div>
      <div style={yellowStyles}>YELLOW</div>
      <div style={greenStyles}>GREEN</div>
      <div style={blueStyles}>BLUE</div>
      <div style={purpleStyles}>PURPLE</div>
    </div>
  );
}
