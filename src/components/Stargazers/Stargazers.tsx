import { styled } from "@nextui-org/react";
import React, { FC } from "react";
import { formatNumber } from "../../utils/formatNumber";
import { StarIcon } from "../Icons/StarIcon";

const S = {
  Stargazers: styled("div", {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "$space$5",
  }),
};

interface Props {
  stars: number;
}

export const Stargazers: FC<Props> = ({ stars }) => {
  return (
    <S.Stargazers>
      <StarIcon />
      <small>{formatNumber(stars)}</small>
    </S.Stargazers>
  );
};
