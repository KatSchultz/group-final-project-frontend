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

interface Props {
  palette: Palette;
}

export default function PaletteInfoForm({ palette }: Props) {
  //   const { info } = useContext(AuthContext);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting, errors, isDirty },
  } = useForm<Palette>();

  const onSubmit = () => {
    onSubmit();
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
          <button onClick={onSubmit}></button>
        </form>
      </div>
    </div>
  );
}
