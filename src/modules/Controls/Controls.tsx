import React from "react";
import BubbleSortButton from "./BubbleSortButton";
import ResetButton from "./ResetButton";
import styles from "./Controls.module.scss";

export const Controls = () => {
  return (
    <div className={styles.controls}>
      <ResetButton />
      <BubbleSortButton />
    </div>
  );
};
