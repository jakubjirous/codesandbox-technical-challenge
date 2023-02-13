import { createTheme } from "@nextui-org/react";
import { sharedTheme } from "./sharedTheme";

export const lightTheme = createTheme({
  type: "light",
  className: "light-theme",
  theme: {
    ...sharedTheme.theme,
    colors: {
      shade1: "#151515",
      shade2: "#515151",
      shade3: "#D1D1D1",
      shade4: "#EEEEEE",
      shade5: "#FFFFFF",
      red: "#D62617",

      // overrides
      text: "#151515",
      background: "#FFFFFF",
      accents6: "#D1D1D1",
    },
  },
});
