import { useMemo } from "react";
import { Status } from "../redux/types";

interface UseStatusReturn {
  name: string;
}

export const useStatusToName = (status: Status): UseStatusReturn => {
  const name = useMemo(() => {
    switch (status) {
      case Status.IN_PROGRESS:
        return "In Progress";

      case Status.REVIEW:
        return "Review";

      case Status.READY_TO_MERGE:
        return "Ready To Merge";
    }
  }, [status]);

  return {
    name,
  };
};
