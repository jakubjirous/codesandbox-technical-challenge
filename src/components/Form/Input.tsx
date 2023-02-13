import { Input as NextUIInput, styled } from "@nextui-org/react";
import { FormElement } from "@nextui-org/react/types/input/input-props";
import React, { FC } from "react";

const S = {
  Container: styled("div", {
    display: "flex",
    flexFlow: "column nowrap",
    width: "100%",
    position: "relative",
  }),
  Input: styled(NextUIInput, {
    label: {
      "&:before": {
        height: "$space$inputLine",
        background: "$shade3",
        bottom: "$1",
      },
      "&:after": {
        height: "$space$inputLine",
        background: "$shade1",
        bottom: "$1",
      },
    },
    input: {
      fontSize: "$fontSizes$3",
      fontWeight: "$fontWeights$3",
      lineHeight: "$lineHeights$3",
      letterSpacing: "$letterSpacings$3",
      margin: "0 !important",
    },
  }),
  ErrorMessage: styled("div", {
    position: "absolute",
    bottom: "-$space$15",
    color: "$red",
  }),
};

interface Props {
  url: string;
  placeholder?: string;
  errorMessage?: string;
  onChange: (event: React.ChangeEvent<FormElement>) => void;
  onClearClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Input: FC<Props> = ({ url, placeholder, errorMessage, onChange, onClearClick }) => {
  return (
    <S.Container>
      <S.Input
        value={url}
        placeholder={placeholder || "https://"}
        size="md"
        underlined
        clearable
        fullWidth
        onChange={onChange}
        onClearClick={onClearClick}
        aria-label="Repository URL"
      />
      {errorMessage && <S.ErrorMessage>{errorMessage}</S.ErrorMessage>}
    </S.Container>
  );
};
