import React from "react";

import Bar from "./Bar/Bar";
import styles from "./Array.module.scss";
import { useAppSelector } from "../../store/hooks";

const WIDTH_MULTIPLIER = window.screen.width;

const Array = () => {
  const arrayState = useAppSelector((state) => state.arraySettings);
  const BAR_WIDTH = WIDTH_MULTIPLIER / arrayState.arrayLength;
  return (
    <div className={styles.array}>
      {arrayState.array.map((height, index) => (
        <Bar key={index} width={BAR_WIDTH} height={height} />
      ))}
    </div>
  );
};

export default Array;
