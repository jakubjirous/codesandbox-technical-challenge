import { Button, Loading, styled } from "@nextui-org/react";
import React, { FC } from "react";

const S = {
  Submit: styled(Button, {
    display: "flex",
    "&:disabled": {
      color: "$colors$shade1",
    },
    variants: {
      color: {
        custom: {
          background: "$colors$shade4",
          color: "$colors$shade1",
          "&:hover": {
            background: "$colors$shade3",
          },
          "&:active": {
            background: "$colors$shade3",
          },
          "&:focus": {
            borderColor: "$colors$shade3",
          },
        },
      },
      size: {
        custom: {
          borderRadius: "$1",
          minWidth: "$space$btnWidth",
          height: "$space$btnHeight",
          fontSize: "$fontSizes$3",
          fontWeight: "$fontWeights$3",
          lineHeight: "$lineHeights$3",
          letterSpacing: "$letterSpacings$3",
        },
      },
    },
  }),
};

interface Props {
  isLoading?: boolean;
  onSubmit: () => void;
}

export const Submit: FC<Props> = ({ isLoading, onSubmit }) => {
  return (
    <S.Submit color="custom" size="custom" onPress={onSubmit} disabled={isLoading} aria-label="Submit">
      {isLoading ? "Loading" : "Submit"}
      {isLoading && (
        <div>
          <Loading color="currentColor" size="xs" type="points-opacity" />
        </div>
      )}
    </S.Submit>
  );
};
