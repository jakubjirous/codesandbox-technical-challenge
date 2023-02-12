import { Loading } from "../redux/types";

interface UseLoadingReturn {
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
}

export const useLoading = (loading: Loading): UseLoadingReturn => {
  return {
    isLoading: loading === "pending",
    isSuccess: loading === "succeeded",
    isError: loading === "failed",
  };
};
