import { createAsyncThunk } from "@reduxjs/toolkit";
import { isRight } from "fp-ts/Either";
import { Query } from "../../types";
import { decodeRepositoryData } from "./decodeRepositoryData";
import { RootState } from "../../store";

export const fetchRepository = createAsyncThunk(
  "repository/fetchRepository",
  async ({ owner, repository }: Query, thunkAPI) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}repos/${owner}/${repository}`);

      if (!response.ok) {
        throw new Error(`Could not fetch, received: ${response.status}`);
      }

      const data = await response.json();

      const decodedResponse = decodeRepositoryData(data);

      if (isRight(decodedResponse)) {
        const { id, name, description, stargazers_count } = decodedResponse.right;
        return {
          id,
          name,
          description,
          stargazers_count,
        };
      } else {
        throw new Error(`Response is not valid RepositoryType: ${decodedResponse}`);
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
  {
    condition: (_, { getState }) => {
      const state = getState() as RootState;
      const fetchStatus = state.repository.loading;

      if (fetchStatus === "pending") {
        return false;
      }
    },
  }
);
