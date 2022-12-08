import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { reset, setSortedElements } from "../../store/reducers/comparison";

export const startSorting = () => {
  const dispatch = useAppDispatch();
  dispatch(reset);
};

export const setPause = (multiplier = 100) => {
  const sortingSpeed = useAppSelector((state) => state.comparison.sortingSpeed);

  return setTimeout(() => {}, multiplier / sortingSpeed);
};

export const afterSuccessSorting = () => {
  const dispatch = useAppDispatch();
  const arrayLength = useAppSelector(
    (state) => state.arraySettings.arrayLength
  );

  dispatch(reset);
  const array = [];
  for (let lenght = 1; lenght <= arrayLength; lenght) {
    array.push(lenght);
    dispatch(setSortedElements(array));
    setPause();
  }
};
