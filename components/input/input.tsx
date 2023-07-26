import React, { FC, ReactNode } from "react";

interface Props {
  /* placeholder for input */
  placeholder?: string;

  /* variant for input, display different style */
  variant?: "outlined" | "filled" | "standard";

  /* prefix node */
  prefix?: ReactNode;

  /* suffix node */
  suffix?: ReactNode;
}

const Input: FC<Props> = (props) => {
  return <input type="text" placeholder={props.placeholder} />;
};

export default Input;
