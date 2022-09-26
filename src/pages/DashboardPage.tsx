import { Palette } from "../types/palette.types";
import React, { useContext } from "react";
import SearchForm from "../components/SearchForm";
import SampleLayout from "../components/SampleLayout";
import { AuthContext } from "../context/auth.context";
import AppHeader from "../components/AppHeader";
import { PaletteContext } from "../context/palette.context";
import AppContainer from "../components/AppContainer";

export default function DashboardPage() {
  const { user } = useContext(AuthContext);
  const { palette } = useContext(PaletteContext);

  const styles = {
    backgroundColor: `${palette.primaryColor}`,
  };

  return (
    <AppContainer>
      <div className="w-full">
        <AppHeader />
        <SearchForm />
        <div className="layout-holder p-2" style={styles}>
          <SampleLayout />
          <SampleLayout />
          <SampleLayout />
        </div>
      </div>
    </AppContainer>
  );
}
