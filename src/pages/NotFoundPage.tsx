import { Container, Grid } from "@nextui-org/react";
import React, { FC } from "react";
import { BackButton } from "../components/Buttons/BackButton";
import { Page } from "../components/Page/Page";

export const NotFoundPage: FC = () => {
  return (
    <Page>
      <Container display="flex" justify="center" alignItems="center">
        <Grid.Container direction="column" alignItems="center" gap={4}>
          <Grid>
            <h1>Oops!</h1>
            <p>The page you're looking for couldn't be found.</p>
          </Grid>
          <Grid>
            <BackButton />
          </Grid>
        </Grid.Container>
      </Container>
    </Page>
  );
};
