import { createAsyncThunk } from "@reduxjs/toolkit";
import { isRight } from "fp-ts/Either";
import { Branch, Query, Status } from "../../types";
import { decodeBranchesData } from "./decodeBranchesData";
import { RootState } from "../../store";
import { parseNextPageFromHeader } from "../../../utils/parseNextPageFromHeader";
import { v4 as uuidv4 } from "uuid";

export const fetchBranches = createAsyncThunk(
  "kanban/fetchBranches",
  async ({ owner, repository }: Query, thunkAPI) => {
    try {
      let branches: Branch[] = [];
      let nextPage = 1;

      // github api pagination
      while (nextPage) {
        const response = await fetch(
          `${process.env.REACT_APP_API_URL}repos/${owner}/${repository}/branches?page=${nextPage}`
        );

        if (!response.ok) {
          throw new Error(`Could not fetch, received: ${response.status}`);
        }

        const data: Branch[] = await response.json();
        branches = [...branches, ...data];

        const linkHeader = response.headers.get("link");

        if (linkHeader) {
          nextPage = parseNextPageFromHeader(linkHeader);
        } else {
          nextPage = 0;
        }
      }

      const decodedResponse = decodeBranchesData(branches);

      if (isRight(decodedResponse)) {
        return decodedResponse.right.map(({ name }) => {
          return {
            // redux-toolkit entityAdapter needs a unique ID
            id: uuidv4(),
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
