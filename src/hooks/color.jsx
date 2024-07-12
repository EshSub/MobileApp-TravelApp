// import { getColors } from "react-native-image-colors";
import React from "react";

export const useGetBackgroundColorFromUrl = (url) => {
  const [colors, setColors] = React.useState([]);

  const bgcolors = [
    "#D3D3D3",
    "#ADD8E6",
    "#E6E6FA",
    "#F5F5DC",
    "#F5FFFA",
    "#F0F8FF",
    "#F0FFF0",
    "#EEE8AA",
    "#FFFFE0",
    "#FFFFF0",
    "#FFF5EE",
    "#FFFAF0",
    "#FDF5E6",
    "#FFFACD",
  ];

  //   React.useEffect(() => {
  // const url = "https://i.imgur.com/68jyjZT.jpg";

  //     getColors(url, {
  //       fallback: "#228B22",
  //       cache: true,
  //       key: url,
  //     }).then(setColors);
  //   }, []);

  return colors[0]
    ? colors[0]
    : bgcolors[Math.floor(Math.random() * bgcolors.length)];
};
