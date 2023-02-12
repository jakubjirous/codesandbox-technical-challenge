import { NextUIProvider } from "@nextui-org/react";
import React, { FC, PropsWithChildren } from "react";
import { useMedia } from "react-use";
import useDarkMode from "use-dark-mode";
import { globalStyles } from "./globalCss";
import { darkTheme } from "./themes/darkTheme";
import { lightTheme } from "./themes/lightTheme";

export const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const preferDarkMode = useMedia("(prefers-color-scheme: dark)");

  const darkMode = useDarkMode(preferDarkMode);

  return (
    <NextUIProvider theme={darkMode.value ? darkTheme : lightTheme} disableBaseline>
      {globalStyles()}
      {children}
    </NextUIProvider>
  );
};
