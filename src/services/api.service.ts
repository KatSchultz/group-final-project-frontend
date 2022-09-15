import axios from "axios";

export function getColorScheme(color = "0,0,0") {
  return axios
    .get(`https://www.thecolorapi.com/scheme?&mode=monochrome&count=6`, {
      params: {
        rgb: color,
      },
    })
    .then((response) => {
      console.log("api color argument: ", color);

      console.log("api service call: ", response);
      return response;
    });
}
