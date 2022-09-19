import { Palette } from "../types/palette.types";
import React from "react";
import SearchForm from "../components/SearchForm";
import SampleLayout from "../components/SampleLayout";

export default function DashboardPage() {
  return (
    <div className="w-full">
      <SearchForm />
      <SampleLayout />
      <SampleLayout />
      <SampleLayout />
    </div>
  );
}
