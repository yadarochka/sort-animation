const randomIntFromInterval = (max: number, min: number): number =>
  Math.random() * (max - min + 1) + min;

export const createArray = (lenght: number): number[] => {
  const array = [];

  for (let i = 0; i < lenght; i++) {
    array.push(randomIntFromInterval(1, 80));
  }

  return array;
};
