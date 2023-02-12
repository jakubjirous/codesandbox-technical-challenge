import * as T from "io-ts";

const RepositoryType = T.type({
  id: T.number,
  name: T.string,
  description: T.string,
  stargazers_count: T.number,
});

export const decodeRepositoryData = (rawData: unknown) => {
  return RepositoryType.decode(rawData);
};
