/**
 * Pixels to Rem unit convertor
 * @param pixels
 */
export const pxToRem = (pixels: number): string => {
  return `${pixels / 16}rem`;
};
