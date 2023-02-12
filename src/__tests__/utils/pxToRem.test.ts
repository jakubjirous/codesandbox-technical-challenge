import { pxToRem } from "../../utils/pxToRem";

describe("pxToRem", () => {
  type Cases = [number, string][];

  const cases: Cases = [
    [0, "0rem"],
    [1, "0.0625rem"],
    [2, "0.125rem"],
    [3, "0.1875rem"],
    [4, "0.25rem"],
    [5, "0.3125rem"],
    [6, "0.375rem"],
    [8, "0.5rem"],
    [10, "0.625rem"],
    [12, "0.75rem"],
    [16, "1rem"],
    [100, "6.25rem"],
  ];

  test.each(cases)("should convert '%spx' to '%s'", (input, expected) => {
    expect(pxToRem(input)).toEqual(expected);
  });
});
