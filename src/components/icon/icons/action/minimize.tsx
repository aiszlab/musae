import React from "react";
import { withIcon } from "../../hoc";

const Minimize = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path d="M6 11H18V13H6V11Z" fill="currentColor" />
    </svg>
  );
});

export default Minimize;
