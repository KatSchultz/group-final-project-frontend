import { Palette } from "../types/palette.types";
import React, { useContext } from "react";
import SearchForm from "../components/SearchForm";
import SampleLayout from "../components/SampleLayout";
import { AuthContext } from "../context/auth.context";
import AppHeader from "../components/AppHeader";


export default function DashboardPage() {
  const { user } = useContext(AuthContext);


  return (
    <div className="w-full">
      <AppHeader />
      <SearchForm />
      <SampleLayout />
      <SampleLayout />
      <SampleLayout />
    </div>
  );
}
