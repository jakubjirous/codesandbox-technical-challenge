import { styled } from "@nextui-org/react";
import { FC, PropsWithChildren } from "react";

const S = {
  Page: styled("main", {
    display: "flex",
    minHeight: "calc(100vh - $space$10)",
  }),
};

export const Page: FC<PropsWithChildren> = ({ children }) => {
  return <S.Page>{children}</S.Page>;
};
