import { createEntityAdapter } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { Repository } from "../../types";

export const repositoryAdapter = createEntityAdapter<Repository>({
  selectId: (repository) => repository.id,
});

export const repositorySelector = repositoryAdapter.getSelectors<RootState>((state) => state.repository);
