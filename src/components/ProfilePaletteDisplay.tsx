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
    <div className="flex flex-col m-2 ">
      <h3 className="font-bold">{palette.name}</h3>
      <div className="color-holder flex flex-row justify-between">
        <div className="text-center">
          <div>Primary</div>
          <div className="w-20 h-20 m-2" style={primaryStyle}></div>
        </div>
        <div className="text-center">
          <div>Secondary</div>
          <div className="w-20 h-20 m-2" style={secondaryStyle}></div>
        </div>
        <div className="text-center">
          <div>Complement</div>
          <div className="w-20 h-20 m-2" style={tertiaryStyle}></div>
        </div>
      </div>
    </div>
  );
}
