import { createCss, defaultThemeMap } from "@stitches/react";
import { space, colors, fonts, fontSizes } from "./token";

export const {
  styled,
  css,
  global,
  keyframes,
  getCssString,
  theme,
} = createCss({
  theme: {
    colors,
    space,
    fonts,
    fontSizes,
  },
  media: {
    bp1: "(min-width: 640px)",
    bp2: "(min-width: 768px)",
    bp3: "(min-width: 1024px)",
  },
  utils: {
    m: (config) => (value) => ({
      marginTop: value,
      marginBottom: value,
      marginLeft: value,
      marginRight: value,
    }),
    px: (config) => (value) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (config) => (value) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
    p: (config) => (value) => ({
      paddingLeft: value,
      paddingRight: value,
      paddingTop: value,
      paddingBottom: value,
    }),
    bg: (config) => (value) => ({
      background: value,
    }),
  },
  prefix: "",
  insertionMethod: "prepend",
  themeMap: defaultThemeMap,
});

export const globalStyles = global({
  html: {
    fontSize: "62.5%",
  },
  "*": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
    fontFamily: "$sans",
  },
});
