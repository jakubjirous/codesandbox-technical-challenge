import { globalCss } from "@nextui-org/react";

export const globalStyles = globalCss({
  "*, *:before, *:after": {
    boxSizing: "border-box",
    textRendering: "geometricPrecision",
    WebkitTapHighlightColor: "transparent",
  },
  html: {
    fontSize: "$fontSizes$3",
  },
  body: {
    margin: 0,
    padding: 0,
    position: "relative",
    overflowX: "hidden",
    WebkitFontSmoothing: "antialiased",
    MozOsxFontSmoothing: "grayscale",
    textRendering: "optimizeLegibility",
    fontFamily: "$fonts$inter",
    fontSize: "$fontSizes$2",
    fontWeight: "$fontWeights$2",
    lineHeight: "$lineHeights$2",
    letterSpacing: "$letterSpacings$2",
  },
  "html, body": {
    backgroundColor: "$shade5",
    color: "$shade1",
  },
  p: {
    fontSize: "$fontSizes$2",
    fontWeight: "$fontWeights$2",
    lineHeight: "$lineHeights$2",
    letterSpacing: "$letterSpacings$2",
    color: "inherit",
  },
  small: {
    fontSize: "$fontSizes$1",
    fontWeight: "$fontWeights$1",
    lineHeight: "$lineHeights$1",
    letterSpacing: "$letterSpacings$1",
    color: "inherit",
  },
  a: {
    cursor: "pointer",
    fontSize: "inherit",
    WebkitTouchCallout: "none",
    WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
    WebkitBoxAlign: "center",
    alignItems: "center",
    color: "inherit",
    textDecoration: "none",
  },
  "a:hover": {
    textDecoration: "none",
  },
  h1: {
    fontSize: "calc($fontSizes$4 / 1.5)",
    fontWeight: "$fontWeights$4",
    lineHeight: "$lineHeights$4",
    letterSpacing: "$letterSpacings$4",

    "@sm": {
      fontSize: "$fontSizes$4",
    },
  },
  "button, input, select, textarea": {
    fontFamily: "inherit",
    fontSize: "inherit",
    lineHeight: "inherit",
    color: "inherit",
    margin: 0,
  },
  "button:focus, input:focus, select:focus, textarea:focus": {
    outline: "none",
  },
});
