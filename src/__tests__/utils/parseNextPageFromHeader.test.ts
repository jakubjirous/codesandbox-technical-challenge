import { parseNextPageFromHeader } from "../../utils/parseNextPageFromHeader";

describe("parseNextPageFromHeader", () => {
  type Cases = [number, string][];

  const cases: Cases = [
    [
      2,
      `<https://api.github.com/repositories/105963253/branches?page=2&per_page=100>; rel="next", <https://api.github.com/repositories/105963253/branches?page=4&per_page=100>; rel="last"`,
    ],
    [
      3,
      ` <https://api.github.com/repositories/105963253/branches?page=1&per_page=100>; rel="prev", <https://api.github.com/repositories/105963253/branches?page=3&per_page=100>; rel="next", <https://api.github.com/repositories/105963253/branches?page=4&per_page=100>; rel="last", <https://api.github.com/repositories/105963253/branches?page=1&per_page=100>; rel="first"`,
    ],
    [
      4,
      `<https://api.github.com/repositories/105963253/branches?page=2&per_page=100>; rel="prev", <https://api.github.com/repositories/105963253/branches?page=4&per_page=100>; rel="next", <https://api.github.com/repositories/105963253/branches?page=4&per_page=100>; rel="last", <https://api.github.com/repositories/105963253/branches?page=1&per_page=100>; rel="first"`,
    ],
    [
      0,
      `<https://api.github.com/repositories/105963253/branches?page=3&per_page=100>; rel="prev", <https://api.github.com/repositories/105963253/branches?page=1&per_page=100>; rel="first"`,
    ],
  ];

  test.each(cases)("should parse '%d' as next page from API header", (expected, input) => {
    expect(parseNextPageFromHeader(input)).toEqual(expected);
  });
});
