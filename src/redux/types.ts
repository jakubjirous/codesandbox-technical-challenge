export interface Query {
  owner: string;
  repository: string;
}

export interface Repository {
  id: number;
  name: string;
  description: string;
  stargazers_count: number;
}

export interface Branch {
  id: string;
  name: string;
  status: Status;
}

export enum Status {
  IN_PROGRESS = "in-progress",
  REVIEW = "review",
  READY_TO_MERGE = "ready-to-merge",
}

export type Loading = "idle" | "pending" | "succeeded" | "failed";
