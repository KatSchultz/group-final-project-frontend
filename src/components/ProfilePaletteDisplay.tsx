import React from "react";
import { Palette } from "../types/palette.types";

interface Props {
  palette: Palette;
}

export default function ProfilePaletteDisplay({ palette }: Props) {
  const primaryStyle = {
    backgroundColor: `${palette.primaryColor}`,
  };

  const secondaryStyle = {
    backgroundColor: `${palette.secondaryColor}`,
  };

  const tertiaryStyle = {
    backgroundColor: `${palette.tertiaryColor}`,
  };

  return (
    <div>
        <div>Primary Color</div>
            <div className="w-20 h-20" style={primaryStyle}></div>
        <div>Secondary Color</div>
            <div className="w-20 h-20" style={secondaryStyle}></div>
        <div>Tertiary Color</div>
            <div className="w-20 h-20" style={tertiaryStyle}></div>
    </div>
  );
}
