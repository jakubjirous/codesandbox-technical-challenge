import { Container, Grid, Spacer } from "@nextui-org/react";
import React, { FC } from "react";
import { Form } from "../components/Form/Form";
import { LogoIcon } from "../components/Icons/LogoIcon";
import { Page } from "../components/Page/Page";

export const HomePage: FC = () => {
  return (
    <Page>
      <Container display="flex">
        <Grid.Container alignContent="center" justify="center" gap={4}>
          <Grid xs={12} sm={4} md={4} lg={3}>
            <Grid.Container direction="column">
              <Grid xs={0} sm={1} />
              <Grid xs>
                <LogoIcon />
              </Grid>
            </Grid.Container>
          </Grid>
          <Grid xs={12} sm={0}>
            <Spacer y={1} />
          </Grid>
          <Grid xs={12} sm={8} md={8} xl={6}>
            <Form />
          </Grid>
        </Grid.Container>
      </Container>
    </Page>
  );
};
