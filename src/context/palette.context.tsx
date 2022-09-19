import { createContext, useState } from "react";
import { Palette } from "../types/palette.types";
import { AuthContext } from "./auth.context";

interface PaletteContextModel {
  palette: Palette | null;
  setPalette: (palette: Palette) => void;
}

export const PaletteContext = createContext<PaletteContextModel>({
  palette: {
    _id: "123456",
    name: "grayscale",
    primaryColor: "rgb(230,230,230)",
    secondaryColor: "rgb(100,100,100)",
    tertiaryColor: "rgb(0,0,0)",
  },
  setPalette: () => {},
});

interface Props {
  children: React.ReactNode;
}

export function PaletteContextProvider({ children }: Props) {
  const [palette, setPalette] = useState<Palette>({
    _id: "123456",
    name: "grayscale",
    primaryColor: "rgb(230,230,230)",
    secondaryColor: "rgb(100,100,100)",
    tertiaryColor: "rgb(0,0,0)",
  });

  return (
    <PaletteContext.Provider value={{ palette, setPalette }}>
      {children}
    </PaletteContext.Provider>
  );
}