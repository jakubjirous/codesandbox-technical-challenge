import { createSlice, EntityState, PayloadAction } from "@reduxjs/toolkit";
import { Loading, Repository } from "../../types";
import { fetchRepository } from "./fetchRepository";
import { repositoryAdapter } from "./repositoryAdapter";

export interface RepositoryState extends EntityState<Repository> {
  owner?: string;
  name?: string;
  repository?: Repository;
  loading: Loading;
}

const initialState: RepositoryState = repositoryAdapter.getInitialState({
  loading: "idle",
});

export const repositorySlice = createSlice({
  name: "repository",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRepository.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(fetchRepository.fulfilled, (state, action: PayloadAction<Repository>) => {
        state.loading = "succeeded";
        repositoryAdapter.removeAll(state);
        repositoryAdapter.addOne(state, action.payload);
      })
      .addCase(fetchRepository.rejected, (state) => {
        state.loading = "failed";
      });
  },
});

export default repositorySlice.reducer;
