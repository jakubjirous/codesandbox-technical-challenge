import { createEntityAdapter, EntityAdapter } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { Branch } from "../../types";

export const kanbanAdapter: EntityAdapter<Branch> = createEntityAdapter<Branch>({
  selectId: (branch) => branch.id,
});

export const kanbanSelector = kanbanAdapter.getSelectors<RootState>((state) => state.kanban);
