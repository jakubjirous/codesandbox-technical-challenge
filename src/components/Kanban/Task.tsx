import { Card, styled } from "@nextui-org/react";
import { FC, useCallback, useMemo } from "react";
import { updateBranch } from "../../redux/features/kanban/kanbanSlice";
import { useAppDispatch } from "../../redux/store";
import { Branch, Status } from "../../redux/types";
import { ChevronLeftIcon } from "../Icons/ChevronLeftIcon";
import { ChevronRightIcon } from "../Icons/ChevronRightIcon";

const Half = styled("div", {
  position: "absolute",
  top: 0,
  width: "50%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  variants: {
    disabled: {
      true: {
        color: "$shade2",
        opacity: 0.2,
      },
    },
  },
});

const S = {
  Card: styled(Card, {
    borderRadius: "$1",
    variants: {
      color: {
        custom: {
          background: "$shade4",
          transition: "$transitions$button",
          "&:hover": {
            background: "$shade3",
          },
        },
      },
    },
  }),
  CardBody: styled(Card.Body, {
    minHeight: "$space$taskHeight",
    padding: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "$shade2",
  }),
  Text: styled("p", {
    fontSize: "$fontSizes$3",
    fontWeight: "$fontWeights$3",
    lineHeight: "$lineHeights$3",
    letterSpacing: "$letterSpacings$3",
    textAlign: "center",
    maxWidth: "20vw",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  }),
  LeftHalf: styled(Half, {
    left: 0,
    justifyContent: "flex-start",
    paddingLeft: "$space$10",
  }),
  RightHalf: styled(Half, {
    right: 0,
    justifyContent: "flex-end",
    paddingRight: "$space$10",
  }),
};

interface Props {
  branch: Branch;
}

export const Task: FC<Props> = ({ branch }) => {
  const dispatch = useAppDispatch();

  const isLeftDisabled = useMemo(() => branch.status === Status.IN_PROGRESS, [branch]);
  const isRightDisabled = useMemo(() => branch.status === Status.READY_TO_MERGE, [branch]);

  const onLeftClick = useCallback(() => {
    if (isLeftDisabled) return;

    dispatch(
      updateBranch({
        id: branch.id,
        changes: {
          status: isRightDisabled ? Status.REVIEW : Status.IN_PROGRESS,
        },
      })
    );
  }, [branch, isLeftDisabled, isRightDisabled, dispatch]);

  const onRightClick = useCallback(() => {
    if (isRightDisabled) return;

    dispatch(
      updateBranch({
        id: branch.id,
        changes: {
          status: isLeftDisabled ? Status.REVIEW : Status.READY_TO_MERGE,
        },
      })
    );
  }, [branch, isLeftDisabled, isRightDisabled, dispatch]);

  return (
    <S.Card isPressable variant="flat" color="custom">
      <S.CardBody>
        <S.LeftHalf onClick={onLeftClick} disabled={isLeftDisabled}>
          <ChevronLeftIcon />
        </S.LeftHalf>
        <S.Text>{branch.name}</S.Text>
        <S.RightHalf onClick={onRightClick} disabled={isRightDisabled}>
          <ChevronRightIcon />
        </S.RightHalf>
      </S.CardBody>
    </S.Card>
  );
};
