import React from "react";

import { Button } from "../../../shared/components/Button";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { setArray } from "../../../store/reducers/arraySettings";
import { createArray } from "../../../utils";

const ResetButton = () => {
  const dispatch = useAppDispatch();
  const arrayLength = useAppSelector(
    (state) => state.arraySettings.arrayLength
  );

  const onClick = () => dispatch(setArray(createArray(arrayLength)));

  return <Button text="Пересоздать массив" onClick={onClick} />;
};

export default ResetButton;
