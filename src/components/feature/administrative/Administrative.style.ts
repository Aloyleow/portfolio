import type { CustomCssVars } from "../../types/utility.types";

/**
 * Returning negative or positive base on index
 * @param index
 * @param degree
 * @returns
 */
export const rotateImageBaseOnIndex = (
  index: number,
  degree: number,
): CustomCssVars => {
  const findOdd = index % 2;
  const isOdd = findOdd !== 0;

  let finalValue = 0;
  if (isOdd) finalValue = 0 - degree;
  else finalValue = degree;

  return { "--image-rotate-deg": `${finalValue}deg` };
};
