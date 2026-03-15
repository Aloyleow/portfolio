/**
 * To create an array of numbers
 * @param lengthOfNum
 * @param maxLength - Usually maximum px
 * @returns
 */
export const getNumbersForFloating = (
  lengthOfNum: number,
  maxLength: number,
) => {
  const numArray = [];
  for (let i = 0; i < lengthOfNum; i++) {
    const rnum = Math.floor(Math.random() * 16) - maxLength;
    const translateNum = rnum !== 0 ? rnum : maxLength;
    numArray.push(translateNum);
  }

  return numArray;
};
