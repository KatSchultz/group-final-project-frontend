import { useContext, useState } from "react";
import { Palette } from "../types/palette.types";
import { Paper, Title, Text, Stack, TextInput, Modal } from "@mantine/core";
import { AuthContext } from "../context/auth.context";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { IconAlertCircle } from "@tabler/icons";
import { error } from "console";
import { useMutation } from "@tanstack/react-query";
import { queryClient } from "../libs/react-query";
import { addPalette, updatePalette } from "../services/palette.service";
import PaletteDisplay from "./PaletteDisplay";
import FormPaletteDisplay from "./FormPaletteDisplay";

interface Props {
  opened: boolean;
  onClose: () => void;
  palette: Palette;
}

export default function UpdatePaletteInfoForm({ onClose, opened, palette }: Props) {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting, errors, isDirty },
  } = useForm<Palette>();

  const editPaletteMutation = useMutation(updatePalette, {
    onSuccess: (updatedPalette) => {
        reset({
            name: updatedPalette.name,
        })
        queryClient.invalidateQueries(['palettes', user?._id])
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const onSubmit = async (data: Partial<Palette>) => {
    if (!user) {
      navigate("/login");
    }
    await editPaletteMutation.mutateAsync({
      id: palette._id,
      data: {...data},
    });
    reset();
    onClose();
  };

  return (
    <Modal opened={opened} onClose={onClose}>
      <div>
        <Title>Rename Your Palette</Title>

        <div>
          <FormPaletteDisplay />
        </div>

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
    </Modal>
  );
}
