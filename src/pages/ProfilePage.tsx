import { Avatar, Center, Container, Stack, Text, Title } from "@mantine/core";
import { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { useMutation, useQuery } from "@tanstack/react-query";
import { addPalette, updatePalette, getPalettesByUid, deletePalette } from "../services/palette.service";
import { Palette } from "../types/palette.types";
import AppContainer from "../components/AppContainer";
import AppHeader from "../components/AppHeader";
import { AuthContext } from "../context/auth.context";
import PaletteDisplay from "../components/PaletteDisplay";
import ProfilePaletteDisplay from "../components/ProfilePaletteDisplay";
import { IconTrash, IconEdit } from "@tabler/icons";
import { queryClient } from "../libs/react-query";
import { AxiosError } from "axios";
import UpdatePaletteInfoForm from "../components/UpdatePaletteInfoForm";

export default function ProfilePage() {
  const { user } = useContext(AuthContext);
  const [dbPalettes, setDbPalettes] = useState<Palette[]>([]);
  const [opened, setOpened] = useState(false);

  function showForm() {
    setOpened(true);
  }

  const palettes = useQuery(
    ["palettes", user?.uid],
    async () => await getPalettesByUid(user?.uid as string)
  );

  console.log(palettes.data);

  const deletePaletteMutation = useMutation(deletePalette, {
    onMutate: () => {},
    onSuccess: () => {
      queryClient.invalidateQueries(["palettes", user?.uid]);
    },
    onError: (error: AxiosError) => {
      console.log(error);
    },
  });

  return (
    <AppContainer>
      <AppHeader />
      <Container size="xs">
        <Stack spacing="xl">
          <Center>
            <Avatar
              src={user?.photoURL}
              alt="Profile image"
              color="blue"
              size={80}
              radius={100}
            >
              {user?.displayName?.charAt(0)}
            </Avatar>
          </Center>
          <div className="text-center">
            <Title order={3}>{user?.displayName}</Title>
          </div>
          <Stack spacing="xl">
            <Center className="flex flex-col">
              {palettes.data?.map((palette) => (
                <div className="flex flex-row items-center m-2 w-min bg-white p-2 shadow-xl">
                  <ProfilePaletteDisplay palette={palette} />
                  <IconTrash
                    onClick={async () => {
                      await deletePaletteMutation.mutateAsync(palette?._id);
                    }}
                  />
        <UpdatePaletteInfoForm opened={opened} onClose={() => {setOpened(false)}} palette={palette} />
                  <IconEdit 
                    onClick={showForm}
                    />
                </div>
              ))}
            </Center>
          </Stack>
        </Stack>
      </Container>
    </AppContainer>
  );
}
