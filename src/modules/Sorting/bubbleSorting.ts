export const bubbleSort = (array: number[]): number[] => {
  const newArray = [...array];
  for (let i = 0; i < newArray.length; i++) {
    for (let j = 0; j < newArray.length - 1 - i; j++) {
      if (newArray[j] > newArray[j + 1]) {
        [newArray[j], newArray[j + 1]] = [newArray[j + 1], newArray[j]];
      }
    }
  }
  return newArray;
};

function count10multiply(num) {
  let i = 0;
  while (Number.isInteger(num / 10)) {
    if (num % 10 === 0) {
      i++;
    }
    num /= 10;
  }

  return [num, i];
}
