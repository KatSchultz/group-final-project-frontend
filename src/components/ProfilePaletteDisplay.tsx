import { IconEdit, IconTrash } from "@tabler/icons";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import React, { useContext, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import { PaletteContext } from "../context/palette.context";
import { queryClient } from "../libs/react-query";
import { deletePalette } from "../services/palette.service";
import { Palette } from "../types/palette.types";
import UpdatePaletteInfoForm from "./UpdatePaletteInfoForm";
import { HoverCard, CopyButton, Button, Text, Group } from "@mantine/core";

interface Props {
  palette: Palette;
}

export default function ProfilePaletteDisplay({ palette }: Props) {
  const { setPalette } = useContext(PaletteContext);
  const { user } = useContext(AuthContext);
  const [opened, setOpened] = useState(false);

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

  const deletePaletteMutation = useMutation(deletePalette, {
    onMutate: () => {},
    onSuccess: () => {
      queryClient.invalidateQueries(["palettes", user?.uid]);
    },
    onError: (error: AxiosError) => {
      console.log(error);
    },
  });

  function showForm() {
    setOpened(true);
  }

  return (
    <div className="flex flex-col m-2 w-min bg-white p-2 ">
      <h3 className="font-bold" onClick={goToSinglePalettePage}>
        {palette.name}
      </h3>
      <div className="color-holder flex flex-row justify-between">
        <HoverCard width="fit-content" shadow="md">
          <HoverCard.Target>
            <div className="text-center">
              <div>Primary</div>
              <div className="w-20 h-20 m-2" style={primaryStyle}></div>
            </div>
          </HoverCard.Target>
          <HoverCard.Dropdown>
            <Text size="sm">
              {palette.primaryColor}{" "}
              <CopyButton value={palette.primaryColor}>
                {({ copied, copy }) => (
                  <Button
                    color={copied ? "teal" : "blue"}
                    onClick={copy}
                    style={{ backgroundColor: "blue" }}
                  >
                    {copied ? "Copied color" : "Copy color"}
                  </Button>
                )}
              </CopyButton>
            </Text>
          </HoverCard.Dropdown>
        </HoverCard>
        <HoverCard width="fit-content" shadow="md">
          <HoverCard.Target>
            <div className="text-center">
              <div>Secondary</div>
              <div className="w-20 h-20 m-2" style={secondaryStyle}></div>
            </div>
          </HoverCard.Target>
          <HoverCard.Dropdown>
            <Text size="sm">
              {palette.secondaryColor}{" "}
              <CopyButton value={palette.secondaryColor}>
                {({ copied, copy }) => (
                  <Button
                    color={copied ? "teal" : "blue"}
                    onClick={copy}
                    style={{ backgroundColor: "blue" }}
                  >
                    {copied ? "Copied color" : "Copy color"}
                  </Button>
                )}
              </CopyButton>
            </Text>
          </HoverCard.Dropdown>
        </HoverCard>
        <HoverCard width="fit-content" shadow="md">
          <HoverCard.Target>
            <div className="text-center">
              <div>Complement</div>
              <div className="w-20 h-20 m-2" style={tertiaryStyle}></div>
            </div>
          </HoverCard.Target>
          <HoverCard.Dropdown>
            <Text size="sm">
              {palette.tertiaryColor}{" "}
              <CopyButton value={palette.tertiaryColor}>
                {({ copied, copy }) => (
                  <Button
                    color={copied ? "teal" : "blue"}
                    onClick={copy}
                    style={{ backgroundColor: "blue" }}
                  >
                    {copied ? "Copied color" : "Copy color"}
                  </Button>
                )}
              </CopyButton>
            </Text>
          </HoverCard.Dropdown>
        </HoverCard>
        <div className="edit-delete-icons flex flex-row items-center">
          <IconTrash
            onClick={async () => {
              await deletePaletteMutation.mutateAsync(palette?._id);
            }}
          />
          <UpdatePaletteInfoForm
            opened={opened}
            onClose={() => {
              setOpened(false);
            }}
            palette={palette}
          />
          <IconEdit onClick={showForm} />
        </div>
      </div>
    </div>
  );
}
