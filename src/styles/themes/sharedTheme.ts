import { pxToRem } from "../../utils/pxToRem";

export const sharedTheme = {
  theme: {
    fonts: {
      inter: "'Inter', sans-serif",
    },
    fontSizes: {
      1: "12px", // small
      2: "14px", // p
      3: "16px", // input
      4: "48px", // h1
    },
    fontWeights: {
      1: 400,
      2: 400,
      3: 400,
      4: 600,
    },
    lineHeights: {
      1: "15px",
      2: "160%",
      3: "140%",
      4: "120%",
    },
    letterSpacings: {
      1: "-0.0125em",
      2: "-0.0125em",
      3: "-0.0125em",
      4: "-0.05em",
    },
    radii: {
      1: `${pxToRem(4)}`,
      round: "50%",
    },
    space: {
      btnHeight: `${pxToRem(38)}`,
      btnWidth: `${pxToRem(84)}`,
      inputLine: `${pxToRem(1)}`,
      taskHeight: `${pxToRem(70)}`,
    },
  },
};
