import React from "react";
import { createRoot } from "react-dom/client";
import style from "./style.module.scss";
import App from "./App";

const container = document.getElementById("app");
const root = createRoot(container!);
root.render(<App />);
