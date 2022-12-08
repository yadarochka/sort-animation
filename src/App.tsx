import React from "react";
import Array from "./modules/Array";
import ResetButton from "./modules/Controls/ResetButton.tsx/ResetButton";
import styles from "./App.module.scss";

const App = () => {
  return (
    <div className={styles.app}>
      <ResetButton />
      <Array />
    </div>
  );
};

export default App;
