import { createSelector } from "@reduxjs/toolkit";
import { Status } from "../../types";
import { kanbanSelector } from "./kanbanAdapter";

export const { selectAll: selectAllBranches } = kanbanSelector;

export const selectBranchesByStatus = (status: Status) =>
  createSelector([selectAllBranches], (branches) => branches.filter((branch) => branch.status === status));

export const selectBranchesByStatusCount = (status: Status) =>
  createSelector([selectBranchesByStatus(status)], (branches) => branches.length);
