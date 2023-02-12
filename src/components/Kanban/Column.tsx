import { Grid, Loading } from "@nextui-org/react";
import React, { FC } from "react";
import { useBranches } from "../../hooks/useBranches";
import { useStatusToName } from "../../hooks/useStatusToName";
import { Status } from "../../redux/types";
import { Task } from "./Task";

interface Props {
  status: Status;
}
export const Column: FC<Props> = ({ status }) => {
  const { branches, total, isLoading, isSuccess } = useBranches(status);

  const { name } = useStatusToName(status);

  return (
    <Grid.Container direction="column" gap={1}>
      <Grid>
        <p>
          <small>
            {name} ({total})
          </small>
        </p>
      </Grid>

      {isLoading && (
        <Grid>
          <Loading type="points-opacity" color="currentColor" size="lg" />
        </Grid>
      )}

      {isSuccess &&
        branches.map((branch, index) => (
          <Grid key={index}>
            <Task branch={branch} status={status} />
          </Grid>
        ))}
    </Grid.Container>
  );
};
