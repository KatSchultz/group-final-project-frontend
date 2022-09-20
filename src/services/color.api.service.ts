import axios from "axios";

export function getColorScheme(
  color = "0,0,0",
  mode = "monochrome",
  count = 3
) {
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
