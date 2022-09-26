import React, { useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { PaletteContext } from "../context/palette.context";
import { Palette } from "../types/palette.types";

export default function ProfilePaletteDisplay() {
  const { palette, setPalette } = useContext(PaletteContext);
  const navigate = useNavigate();

  const primaryStyle = {
    backgroundColor: `${palette.primaryColor}`,
  };

  const secondaryStyle = {
    backgroundColor: `${palette.secondaryColor}`,
  };

  const tertiaryStyle = {
    backgroundColor: `${palette.tertiaryColor}`,
  };

  function goToSinglePalettePage() {
    setPalette({ ...palette });
    navigate(`/palettes/${palette._id}`);
  }

  return (
    <div className="flex flex-col m-2 w-min bg-white p-2 shadow-md align-center">
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
