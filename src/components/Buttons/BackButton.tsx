import { Button, styled } from "@nextui-org/react";
import { FC, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Paths } from "../../pages/Router";
import { ArrowLeftIcon } from "../Icons/ArrowLeftIcon";

const S = {
  BackButton: styled(Button, {
    variants: {
      color: {
        custom: {
          background: "$colors$shade5",
          color: "$colors$shade2",
          "&:hover": {
            background: "$colors$shade4",
          },
          "&:active": {
            background: "$colors$shade4",
          },
          "&:focus": {
            borderColor: "$colors$shade4",
          },
        },
      },
      size: {
        custom: {
          borderRadius: "$1",
          minWidth: "$space$btnHeight",
          width: "$space$btnHeight",
          height: "$space$btnHeight",
        },
      },
    },
  }),
};

export const BackButton: FC = () => {
  const navigate = useNavigate();

  const onPress = useCallback(() => {
    navigate(Paths.HOME);
  }, []);

  return (
    <S.BackButton size="custom" color="custom" onPress={onPress} aria-label="Navigate Back">
      <ArrowLeftIcon />
    </S.BackButton>
  );
};
