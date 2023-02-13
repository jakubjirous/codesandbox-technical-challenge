import { createAsyncThunk } from "@reduxjs/toolkit";
import { isRight } from "fp-ts/Either";
import { Query, Status } from "../../types";
import { decodeBranchesData } from "./decodeBranchesData";
import { RootState } from "../../store";

export const fetchBranches = createAsyncThunk(
  "kanban/fetchBranches",
  async ({ owner, repository }: Query, thunkAPI) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}repos/${owner}/${repository}/branches`);

      if (!response.ok) {
        throw new Error(`Could not fetch, received: ${response.status}`);
      }

      const data = await response.json();

      const decodedResponse = decodeBranchesData(data);

      if (isRight(decodedResponse)) {
        return decodedResponse.right.map(({ name, commit }) => {
          return {
            // API response doesn't have an ID, so for now we're using SHA of the commit
            id: commit.sha,
            name,
            status: Status.IN_PROGRESS,
          };
        });
      } else {
        throw new Error(`Response is not valid BranchesType: ${decodedResponse}`);
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
  {
    condition: (_, { getState }) => {
      const state = getState() as RootState;
      const fetchStatus = state.kanban.loading;

      if (fetchStatus === "pending") {
        return false;
      }
    },
  }
);
