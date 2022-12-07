import React, { FC } from "react";
import classnames from "classnames/bind";

import styles from "./Button.module.scss";

const cn = classnames.bind(styles);

type ButtonProps = {
  text: string;
  className: string;
  onClick: () => void;
};

const Button: FC<ButtonProps> = ({ text, className, onClick }) => {
  return (
    <button onClick={onClick} className={cn("button", className)}>
      {text}
    </button>
  );
};

export default Button;
