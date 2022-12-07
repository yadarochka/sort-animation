import React from "react";

import { Button } from "../../../shared/components/Button";
import { useAppDispatch } from "../../../store/hooks";
import { setArray } from "../../../store/reducers/arraySettings";
import { createArray } from "../../../utils";

const ResetButton = () => {
  const dispatch = useAppDispatch();

  const onClick = () => dispatch(setArray(createArray(30)));

  return <Button text="Пересоздать массив" onClick={onClick} />;
};

export default ResetButton;
