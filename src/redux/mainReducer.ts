import { combineReducers } from "@reduxjs/toolkit";
import repositoryReducer from "./features/repository/repositorySlice";
import kanbanReducer from "./features/kanban/kanbanSlice";

/**
 * Combines multiple reducers into a single main reducer.
 */
export const mainReducer = combineReducers({
  repository: repositoryReducer,
  kanban: kanbanReducer,
});
