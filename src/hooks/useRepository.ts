import { selectRepository } from "../redux/features/repository/repositorySelector";
import { useAppSelector } from "../redux/store";
import { Repository } from "../redux/types";
import { useLoading } from "./useLoading";

interface UseRepositoryReturn {
  repository: Repository;
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
}

export const useRepository = (): UseRepositoryReturn => {
  const repository = useAppSelector(selectRepository);

  const loading = useAppSelector((state) => state.repository.loading);

  const { isLoading, isSuccess, isError } = useLoading(loading);

  return {
    repository,
    isLoading,
    isSuccess,
    isError,
  };
};
