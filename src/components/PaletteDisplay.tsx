import React from "react";
import { Color } from "../types/color.types";

interface Props {
  color: Color;
}

export default function PaletteDisplay({ color }: Props) {
  const styles = {
    backgroundColor: `${color.rgb.value}`,
  };
  console.log("color . rgb: ", color.rgb);
  console.log("Inside palette display", color);
  return (
    <div className="w-20 h-20" style={styles}>
      <div>PaletteDisplay</div>
    </div>
  );
}
