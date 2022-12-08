import styles from "./Bar.modules.scss";
import React, { FC } from "react";

type BarProps = {
  width: number;
  height: number;
};

const Bar: FC<BarProps> = ({ width, height }) => {
  const barStyles = {
    height: `${height}%`,
    width: `${width}px`,
  };

  return <div className={styles.bar} style={barStyles} />;
};

export default Bar;
