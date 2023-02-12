import { createSelector } from "@reduxjs/toolkit";
import { repositorySelector } from "./repositoryAdapter";

export const { selectAll: selectAllRepositories, selectTotal: selectRepositoriesTotal } = repositorySelector;

export const selectRepository = createSelector([selectAllRepositories], (repositories) => repositories[0]);
