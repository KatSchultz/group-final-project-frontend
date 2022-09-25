import React, { useContext } from "react";
import ProfilePaletteDisplay from "./ProfilePaletteDisplay";
import SampleLayout from "./SampleLayout";
import { PaletteContext } from "../context/palette.context";
import { Center, Stack } from "@mantine/core";
import AppContainer from "./AppContainer";
import AppHeader from "./AppHeader";

export default function SinglePalettePage() {
  //MAYBE USE USEQUERY TO GET THE PALETTE INSTEAD OF SETTING THE PALETTECONTEXT IN PROFILEPALETTEDISPLAY
  const { palette } = useContext(PaletteContext);

  const styles = {
    backgroundColor: `${palette.primaryColor}`,
  };

  return (
    <AppContainer>
      <AppHeader />
      <div style={styles}>
        <Stack spacing="xl">
          <Center className="flex flex-col">
            <ProfilePaletteDisplay palette={palette} />
          </Center>
        </Stack>
        <SampleLayout />
        <SampleLayout />
        <SampleLayout />
      </div>
    </AppContainer>
  );
}
