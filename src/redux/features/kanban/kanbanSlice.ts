import { createSlice, EntityState, PayloadAction } from "@reduxjs/toolkit";
import { Branch, Loading } from "../../types";
import { fetchBranches } from "./fetchBranches";
import { kanbanAdapter } from "./kanbanAdapter";

export interface KanbanState extends EntityState<Branch> {
  loading: Loading;
}

const initialState: KanbanState = kanbanAdapter.getInitialState({
  loading: "idle",
});

export const kanbanSlice = createSlice({
  name: "kanban",
  initialState,
  reducers: {
    updateBranch: kanbanAdapter.updateOne,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBranches.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(fetchBranches.fulfilled, (state, action: PayloadAction<Branch[]>) => {
        state.loading = "succeeded";
        kanbanAdapter.setAll(state, action.payload);
      })
      .addCase(fetchBranches.rejected, (state) => {
        state.loading = "failed";
      });
  },
});

export const { updateBranch } = kanbanSlice.actions;

export default kanbanSlice.reducer;
