import { useContext, useState } from "react";
import { Palette } from "../types/palette.types";
import {
  Paper,
  Title,
  Text,
  Stack,
  TextInput,
  Group,
  Textarea,
  FileButton,
  Button,
  Divider,
  Input,
  Image,
  Alert,
} from "@mantine/core";
import { AuthContext } from "../context/auth.context";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { IconAlertCircle } from "@tabler/icons";
import { error } from "console";
import { PaletteContext } from "../context/palette.context";
import { useMutation } from "@tanstack/react-query";
import { queryClient } from "../libs/react-query";
import userEvent from "@testing-library/user-event";
import { addPalette } from "../services/palette.service";

interface Props {
  closeForm: () => void;
}

export default function PaletteInfoForm({ closeForm }: Props) {
  const { palette } = useContext(PaletteContext);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting, errors, isDirty },
  } = useForm<Palette>();

  const addPaletteMutation = useMutation(addPalette, {
    onSuccess: () => {
      queryClient.invalidateQueries(["palettes", user?.uid]);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const onSubmit = async (data: Partial<Palette>) => {
    if (!user) {
      navigate("/login");
    }
    await addPaletteMutation.mutateAsync({
      uid: user?.uid,
      textColor: "black",
      name: data.name,
      primaryColor: palette.primaryColor,
      secondaryColor: palette.secondaryColor,
      tertiaryColor: palette.tertiaryColor,
    });
    reset();
    closeForm();
  };

  return (
    <div>
      <Title>Palette Info</Title>

      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextInput
            label="Palette name"
            withAsterisk
            {...register("name", { required: true })}
            error={errors.name && "Palette name is required"}
          />
          <button type="submit">Save Palette</button>
        </form>
      </div>
    </div>
  );
}
