import { Query } from "../../redux/types";
import { parseGitHubUrl } from "../../utils/parseGitHubUrl";

describe("parseGitHubUrl", () => {
  type Cases = [string, Query | undefined][];

  const cases: Cases = [
    ["https://www.google.com", undefined],
    ["https://github.com", undefined],
    ["https://github.com/codesandbox", undefined],
    ["https://github.com/codesandbox/sandpack", { owner: "codesandbox", repository: "sandpack" }],
    ["https://github.com/codesandbox/sandpack", { owner: "codesandbox", repository: "sandpack" }],
    ["https://github.com/nextui-org/nextui", { owner: "nextui-org", repository: "nextui" }],
  ];

  test.each(cases)("should parse GitHub repository URL '%s' to '%j'", (input, expected) => {
    expect(parseGitHubUrl(input)).toEqual(expected);
  });
});
