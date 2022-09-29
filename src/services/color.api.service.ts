import axios from "axios";
import { Response } from "../types/response.types";

export function getColorScheme(
  color = "0,0,0",
  mode = "monochrome",
  count = 3
): Promise<Response> {
  return axios
    .get(`https://www.thecolorapi.com/scheme?`, {
      params: {
        hsl: color,
        mode,
        count,
      },
    })
    .then((response) => {
      console.log(response);
      return response;
    });
}
