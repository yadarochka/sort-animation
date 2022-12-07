import React from "react";

import Bar from "./Bar/Bar";
import styles from "./Array.module.scss";

const WIDTH_MULTIPLIER = window.screen.width;
const ARRAY = [500, 650, 400, 450, 750];
const BAR_WIDTH = WIDTH_MULTIPLIER / ARRAY.length;

const Array = () => (
  <div className={styles.array}>
    {ARRAY.map((height, index) => (
      <Bar key={index} width={BAR_WIDTH} height={height} />
    ))}
  </div>
);

export default Array;
