import { combineReducers } from "@reduxjs/toolkit";
import repositoryReducer from "./features/repository/repositorySlice";

/**
 * Combines multiple reducers into a single main reducer.
 */
export const mainReducer = combineReducers({
  repository: repositoryReducer,
});
