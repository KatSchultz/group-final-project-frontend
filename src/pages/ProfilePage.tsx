import { Avatar, Center, Container, Stack, Text, Title } from '@mantine/core';
import { useState, useContext } from 'react'
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { addPalette } from '../services/palette.service';
import { Palette } from '../types/palette.types';
import AppContainer from '../components/AppContainer';
import AppHeader from '../components/AppHeader';
import { AuthContext } from '../context/auth.context';


export default function ProfilePage() {
  const { user } = useContext(AuthContext)
 

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

          </Stack>
        </Stack>
      </Container>
    </AppContainer>
  );
}