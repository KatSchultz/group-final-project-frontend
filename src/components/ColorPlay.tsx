//This is where i'm trying to figure out how to slightly randomize a color, but keep it in the same color family

export default function ColorPlay() {
  //   const red = rgb(150, 0, 0);
  //   const orange = rgb(255, 165, 0);
  //   const yellow = rgb(255, 255, 0);
  //   const green = rgb(0, 100, 0);
  //   const blue = rgb(0, 0, 255);
  //   const purple = rgb(128, 0, 128);

  function createRGB(
    rMax: number,
    rMin: number,
    gMax: number,
    gMin: number,
    bMax: number,
    bMin: number
  ) {
    const r = Math.random() * (rMax - rMin) + rMin;
    const g = Math.random() * (gMax - gMin) + gMin;
    const b = Math.random() * (bMax - bMin) + bMin;
    return `${r}, ${g}, ${b}`;
  }

  const red = createRGB(255, 200, 60, 0, 60, 0);
  const orange = createRGB(255, 200, 200, 100, 30, 0);
  const yellow = createRGB(255, 200, 255, 200, 0, 0);
  const green = createRGB(0, 0, 200, 100, 60, 0);
  const blue = createRGB(60, 0, 60, 0, 255, 200);
  const purple = createRGB(200, 100, 0, 0, 200, 100);

  const redStyles = {
    backgroundColor: `rgb(${red})`,
    padding: 40,
    marginBottom: 10,
    fontSize: "2rem",

    color: "white",
  };

  const orangeStyles = {
    backgroundColor: `rgb(${orange})`,
    padding: 40,
    marginBottom: 10,
    fontSize: "2rem",
    color: "white",
  };

  const yellowStyles = {
    backgroundColor: `rgb(${yellow})`,
    padding: 40,
    marginBottom: 10,
    fontSize: "2rem",

    color: "white",
  };

  const greenStyles = {
    backgroundColor: `rgb(${green})`,
    padding: 40,
    marginBottom: 10,
    fontSize: "2rem",

    color: "white",
  };

  const blueStyles = {
    backgroundColor: `rgb(${blue})`,
    padding: 40,
    marginBottom: 10,
    fontSize: "2rem",

    color: "white",
  };

  const purpleStyles = {
    backgroundColor: `rgb(${purple})`,
    padding: 40,
    marginBottom: 10,
    fontSize: "2rem",

    color: "white",
  };

  console.log("createBlue: ", blue);
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
