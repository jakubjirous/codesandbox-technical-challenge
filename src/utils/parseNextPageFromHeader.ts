/**
 * Parses the number of the next page from the link header
 *
 * @param linkHeader
 */
export const parseNextPageFromHeader = (linkHeader: string): number => {
  const links = linkHeader.split(", ");

  for (const link of links) {
    if (link.endsWith('rel="next"')) {
      const pageIndex = link.indexOf("page=");
      const pageNumber = link.substring(pageIndex + 5);
      return parseInt(pageNumber, 10);
    }
  }

  return 0;
};
