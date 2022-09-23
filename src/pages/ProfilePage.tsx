import { Avatar, Center, Container, Stack, Text, Title } from '@mantine/core';
import { useState, useContext } from 'react'
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { addPalette } from '../services/palette.service';
import { Palette } from '../types/palette.types';
import { getPalettesByUid } from '../services/palette.service';
import AppContainer from '../components/AppContainer';
import AppHeader from '../components/AppHeader';
import { AuthContext } from '../context/auth.context';
import PaletteDisplay from '../components/PaletteDisplay';
import ProfilePaletteDisplay from '../components/ProfilePaletteDisplay';
import { IconTrash } from '@tabler/icons';
import { deletePalette } from '../services/palette.service';


export default function ProfilePage() {
  const { user } = useContext(AuthContext)
  const [dbPalettes, setDbPalettes] = useState<Palette[]>([]);

  const palettes = useQuery(
    ['palettes', user?.uid],
    async () => await getPalettesByUid(user?.uid as string)
  );
    
    console.log(palettes.data)
 

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
          <Stack spacing="xs">
            <Center>
             {palettes.data?.map(palette => (
              <div>
              <ProfilePaletteDisplay palette={palette} />
              <IconTrash onClick={() => deletePalette(palette._id)} />
              </div>              
             ))}
            </Center>
          </Stack>
        </Stack>
      </Container>
    </AppContainer>
  );
}