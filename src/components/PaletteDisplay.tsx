import React from "react";
import { Color } from "../types/color.types";

interface Props {
  color: Color;
}

export default function PaletteDisplay({ color }: Props) {
  const styles = {
    backgroundColor: `${color.rgb.value}`,
  };

  return (
    <div className="w-20 h-20" style={styles}>
      <div>PaletteDisplay</div>
    </div>
  );
}
