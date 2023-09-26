import React, { FC, ButtonHTMLAttributes } from "react";

import "./style/Button.css";
import { TButton } from "../../model/componentsType";

const Button: FC<TButton & ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  onClick,
}) => {
  return (
    <button onClick={onClick} className={`button_home_page`}>
      {children}
    </button>
  );
};

export default Button;
