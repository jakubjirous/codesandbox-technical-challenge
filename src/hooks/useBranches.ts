import { selectBranchesByStatus, selectBranchesByStatusCount } from "../redux/features/kanban/kanbanSelector";
import { useAppSelector } from "../redux/store";
import { Branch, Status } from "../redux/types";
import { useLoading } from "./useLoading";

interface UseBranchesReturn {
  branches: Branch[];
  total: number;
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
}

export const useBranches = (status: Status): UseBranchesReturn => {
  const branches = useAppSelector(selectBranchesByStatus(status));

  const total = useAppSelector(selectBranchesByStatusCount(status));

  const loading = useAppSelector((state) => state.kanban.loading);

  const { isLoading, isSuccess, isError } = useLoading(loading);

  return {
    branches,
    total,
    isLoading,
    isSuccess,
    isError,
  };
};
