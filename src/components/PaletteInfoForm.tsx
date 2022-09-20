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

interface Props {
  palette: Palette;
}

export default function PaletteInfoForm({ palette }: Props) {
    const { register, handleSubmit, reset, formState: { isSubmitting, errors, isDirty }, = useForm<Palette>({
        defaultValues: {
            paletteUsername: profile?.paletteUsername,
            
        }
    })}
  return (
    <div>
      <Title>Palette Info</Title>

      <div>
        <Input.Wrapper label="Profile username" withAsterisk>
          <div className="flex rounded-md mb-1 mt-[2px]">
            <div
              style={{ border: "1px solid" }}
              className="inline-flex items-center px-3 rounded-l !border-r-0 !border-gray-400 bg-gray-50 text-gray-600 sm:text-sm"
            >
              {window.location.host}/
            </div>
            <TextInput
              className="flex-1"
              classNames={{
                input: "!rounded-l-none !bg-white !text-black",
              }}
              placeholder="username"
              // {...register('profileUsername', { required: true })}
            />
          </div>
        </Input.Wrapper>
      </div>
    </div>
  );
}
