import React, { FC } from "react";
import { TSecondRightBlockChildren } from "../../model/componentsType";

import "./style/SecondRightBloks.css";

const SecondRightBloks: FC<TSecondRightBlockChildren> = ({ children }) => {
  return <div className="second_wrapper_blocks">{children}</div>;
};

export default SecondRightBloks;
