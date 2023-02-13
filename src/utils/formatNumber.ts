/**
 * Format a number with an appropriate shorthand unit
 *
 * @param value The number to be formatted.
 * @returns {string} The formatted number as a string.
 */
export const formatNumber = (value: number): string => {
  if (value < 1000) {
    return String(value);
  }

  const numInK = +(value / 1000).toFixed(1);
  const roundedNumInK = Math.round(numInK);

  return `${roundedNumInK === numInK ? roundedNumInK : numInK}k`;
};
