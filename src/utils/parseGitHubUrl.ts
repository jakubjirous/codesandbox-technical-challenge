import { Query } from "../redux/types";

/**
 * Helper function for extracting the owner and repository information uses a regular expression to match the structure of a GitHub URL
 *
 * @param url
 */
export const parseGitHubUrl = (url: string): Query | undefined => {
  const match = url.match(/https:\/\/github.com\/([^/]+)\/([^/]+)/);

  if (!match) {
    return undefined;
  }

  const [, owner, repository] = match;

  return { owner, repository };
};
