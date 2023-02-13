import { createTheme } from "@nextui-org/react";
import { sharedTheme } from "./sharedTheme";

export const darkTheme = createTheme({
  type: "dark",
  className: "dark-theme",
  theme: {
    ...sharedTheme.theme,
    colors: {
      shade1: "#F2F2F2",
      shade2: "#B0B0B0",
      shade3: "#383838",
      shade4: "#222222",
      shade5: "#151515",
      red: "#E75B4F",

      // overrides
      text: "#F2F2F2",
      background: "#151515",
      accents6: "#383838",
    },
  },
});
