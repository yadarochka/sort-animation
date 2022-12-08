import React from "react";

import { Button } from "../../../shared/components/Button";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { setArray } from "../../../store/reducers/arraySettings";
import { createArray } from "../../../utils";
import { bubbleSort } from "../../Sorting/bubbleSorting";

const BubbleSortButton = () => {
  const dispatch = useAppDispatch();
  const array = useAppSelector((state) => state.arraySettings.array);

  const onClick = () => {
    bubbleSort(array);
  };

  return <Button text="Пузырьковая сортировка" onClick={onClick} />;
};

export default BubbleSortButton;
