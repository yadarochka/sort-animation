import React from "react";

import Bar from "./Bar/Bar";
import styles from "./Array.module.scss";
import { createArray } from "../../utils";
import { useAppSelector } from "../../store/hooks";

const WIDTH_MULTIPLIER = window.screen.width;
const ARRAY = createArray(30);
const BAR_WIDTH = WIDTH_MULTIPLIER / ARRAY.length;

const Array = () => {
  const arrayBars = useAppSelector((state) => state.arraySettings.array);
  return (
    <div className={styles.array}>
      {arrayBars.map((height, index) => (
        <Bar key={index} width={BAR_WIDTH} height={height} />
      ))}
    </div>
  );
};

export default Array;
