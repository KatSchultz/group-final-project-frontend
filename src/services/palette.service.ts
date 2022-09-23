import { api } from "../libs/axios";
import { Palette } from "../types/palette.types";

export async function getPalettes() {
  const response = await api.get<Palette>("/palettes");
  return response.data;
}

export async function getPalette(id: string) {
  const response = await api.get<Palette>(`/palettes/${id}`);
  return response.data;
}

export async function getPaletteByUid(uid: string) {
  const response = await api.get<Palette>(`/palettes/${uid}`);
  return response.data;
}

export async function getPalettesByUid(uid: string) {
  const response = await api.get<Palette[]>(`/palettes?uid=${uid}`);
  return response.data;
}

export async function addPalette(data: Partial<Palette>) {
  const response = await api.post<Palette>("/palettes", data);
  return response.data;
}

export async function updatePalette(id: string, data: Partial<Palette>) {
  const response = await api.patch<Palette>(`/palettes/${id}`, data);
  return response.data;
}

export async function deletePalette(id: string) {
  const response = await api.delete<Palette>(`/palettes/${id}`);
}
