import React from "react";
import Array from "./modules/Array";
import styles from "./App.module.scss";
import { Controls } from "./modules/Controls";

const App = () => {
  return (
    <div className={styles.app}>
      <Controls />
      <Array />
    </div>
  );
};

export default App;
