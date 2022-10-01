import React, { useContext } from "react";
import { Accordion } from "@mantine/core";
import { PaletteContext } from "../context/palette.context";

export default function PaletteDetailDropdown() {
  const { palette } = useContext(PaletteContext);

  return (
    <Accordion defaultValue="customization">
      <Accordion.Item value="customization">
        <Accordion.Control>Color Details</Accordion.Control>
        <Accordion.Panel>
          {/* <p>Primary rgb: {palette.primaryColor.rgb.value}</p> */}
        </Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  );
}
