import axios from "axios";

export function getColorScheme(
  color = "0,0,0",
  mode = "monochrome",
  count = 3
) {
  return axios
    .get(`https://www.thecolorapi.com/scheme?`, {
      params: {
        rgb: color,
        mode,
        count,
      },
    })
    .then((response) => {
      return response;
    });
}
