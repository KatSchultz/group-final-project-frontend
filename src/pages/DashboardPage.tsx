import { Palette } from "../types/palette.types";
import React, { useContext } from "react";
import SearchForm from "../components/SearchForm";
import SampleLayout from "../components/SampleLayout";
import { AuthContext } from "../context/auth.context";

export default function DashboardPage() {
  const { user } = useContext(AuthContext);

  return (
    <div className="w-full">
      <SearchForm />
      <SampleLayout />
      <SampleLayout />
      <SampleLayout />
    </div>
  );
}
