import { formatNumber } from "../../utils/formatNumber";

describe("formatNumber", () => {
  type Cases = [number, string][];

  const cases: Cases = [
    [0, "0"],
    [1, "1"],
    [99, "99"],
    [100, "100"],
    [1000, "1k"],
    [1100, "1.1k"],
    [1900, "1.9k"],
    [2000, "2k"],
    [361235, "361.2k"],
  ];

  test.each(cases)("should format number '%d' to '%s'", (input, expected) => {
    expect(formatNumber(input)).toEqual(expected);
  });
});
