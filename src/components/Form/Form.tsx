import { Grid, Spacer } from "@nextui-org/react";
import { FormElement } from "@nextui-org/react/types/input/input-props";
import React, { FC, useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRepository } from "../../hooks/useRepository";
import { Paths } from "../../pages/Router";
import { fetchBranches } from "../../redux/features/kanban/fetchBranches";
import { fetchRepository } from "../../redux/features/repository/fetchRepository";
import { useAppDispatch } from "../../redux/store";
import { Query } from "../../redux/types";
import { parseGitHubUrl } from "../../utils/parseGitHubUrl";
import { Input } from "./Input";
import { Submit } from "./Submit";

export const Form: FC = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const { isLoading, isSuccess, isError } = useRepository();

  const [url, setUrl] = useState<string>("");
  const [query, setQuery] = useState<Query>();
  const [errorMessage, setErrorMessage] = useState<string>();

  const onChange = useCallback(
    (event: React.ChangeEvent<FormElement>) => {
      const { value } = event.target;
      setUrl(value);

      if (errorMessage) {
        setErrorMessage(undefined);
      }
    },
    [setUrl, errorMessage]
  );

  const onClearClick = useCallback(() => {
    setUrl("");
    setErrorMessage(undefined);
  }, [setUrl, setErrorMessage]);

  const onSubmit = useCallback(() => {
    const result = parseGitHubUrl(url);

    if (!result) {
      setErrorMessage("Ops! Your GitHub repository URL is invalid.");
    } else {
      setQuery(result);
      setErrorMessage(undefined);

      const { repository, owner } = result;
      dispatch(
        fetchRepository({
          repository,
          owner,
        })
      );
    }
  }, [url]);

  useEffect(() => {
    setErrorMessage(undefined);
  }, [isLoading]);

  useEffect(() => {
    if (isLoading) {
      setErrorMessage(undefined);
    }

    if (isError) {
      setErrorMessage("Ops! Something went wrong. Try again.");
    }

    if (isSuccess && query) {
      dispatch(
        fetchBranches({
          repository: query?.repository,
          owner: query?.owner,
        })
      );
      navigate(Paths.KANBAN);
    }
  }, [isSuccess, isError, isLoading, query]);

  return (
    <Grid.Container>
      <Grid xs={12} md={9} lg={7} xl={6}>
        <h1>Start by passing the repository URL.</h1>
      </Grid>
      <Grid xs={12}>
        <Spacer y={2} />
      </Grid>
      <Grid xs={12}>
        <Grid.Container gap={1}>
          <Grid xs>
            <Input url={url} onChange={onChange} onClearClick={onClearClick} errorMessage={errorMessage} />
          </Grid>
          <Grid>
            <Submit onSubmit={onSubmit} isLoading={isLoading} />
          </Grid>
        </Grid.Container>
      </Grid>
    </Grid.Container>
  );
};
