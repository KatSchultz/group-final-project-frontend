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
        <div className="layout-holder p-2 w-full" style={styles}>
          <div className="full-width-sample  w-full mx-auto ">
            <SampleLayout />
          </div>
          <div className="triple-card-layout flex flex-col lg:flex-row lg:space-x-8 lg:mx-auto lg:w-9/12">
            <SampleLayout />
            <SampleLayout />
            <SampleLayout />
          </div>
        </div>
      </div>
    </AppContainer>
  );
}
