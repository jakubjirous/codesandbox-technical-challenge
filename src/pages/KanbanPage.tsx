import { Container, Grid, Loading } from "@nextui-org/react";
import React, { FC } from "react";
import { Navigate } from "react-router-dom";
import { BackButton } from "../components/Buttons/BackButton";
import { Column } from "../components/Kanban/Column";
import { Page } from "../components/Page/Page";
import { Stargazers } from "../components/Stargazers/Stargazers";
import { useRepository } from "../hooks/useRepository";
import { Status } from "../redux/types";
import { Paths } from "./Router";

export const KanbanPage: FC = () => {
  const { repository, isLoading, isSuccess } = useRepository();

  if (!repository) {
    return <Navigate to={Paths.HOME} />;
  }

  return (
    <Page>
      <Container display="flex" direction="column">
        <Grid.Container css={{ flex: 1 }}>
          <Grid xs={12} css={{ height: "$space$96" }} alignContent="center">
            <Grid.Container>
              <Grid xs={12} sm={4} alignItems="center">
                <BackButton />
              </Grid>
              <Grid xs={12} sm={4} direction="column" justify="center">
                {isLoading && <Loading type="points-opacity" color="currentColor" size="xl" />}
                {isSuccess && (
                  <>
                    <h1>{repository.name}</h1>
                    <p>{repository.description}</p>
                  </>
                )}
              </Grid>
              <Grid xs={12} sm={4} justify="flex-end" alignItems="center">
                {isLoading && <Loading type="points-opacity" color="currentColor" size="sm" />}
                {isSuccess && <Stargazers stars={repository.stargazers_count} />}
              </Grid>
            </Grid.Container>
          </Grid>
          <Grid xs={12} css={{ height: "calc(100% - $space$96)" }}>
            <Grid.Container gap={1}>
              <Grid xs={12} sm={4}>
                <Column status={Status.IN_PROGRESS} />
              </Grid>
              <Grid xs={12} sm={4}>
                <Column status={Status.REVIEW} />
              </Grid>
              <Grid xs={12} sm={4}>
                <Column status={Status.READY_TO_MERGE} />
              </Grid>
            </Grid.Container>
          </Grid>
        </Grid.Container>
      </Container>
    </Page>
  );
};
