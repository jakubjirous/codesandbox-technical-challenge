import * as T from "io-ts";

const BranchesType = T.readonlyArray(
  T.type({
    name: T.string,
  })
);

export const decodeBranchesData = (rawData: unknown) => {
  return BranchesType.decode(rawData);
};
