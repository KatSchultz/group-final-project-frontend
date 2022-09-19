import { api } from "../libs/axios";
import { Palette } from "../types/palette.types";

export async function getPalettes() {
  const response = await api.get<Palette>("/palette");
  return response.data;
}

export async function getPalette(id: string) {
  const response = await api.get<Palette>(`/palette/${id}`);
  return response.data;
}

export async function getPaletteByUid(uid: string) {
  const response = await api.get<Palette>(`/palette/${uid}`);
  return response.data;
}

export async function addPalette(data: Partial<Palette>) {
  const response = await api.post<Palette>("/palette", data);
  return response.data;
}

export async function updatePalette(id: string, data: Partial<Palette>) {
  const response = await api.patch<Palette>(`/palette/${id}`, data);
  return response.data;
}

export async function deletePalette(id: string) {
  const response = await api.delete<Palette>(`/palette/${id}`);
}
