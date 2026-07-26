import React from "react";
import { withIcon } from "../../hoc";

const IconViewComfy = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M2 2V18H22V2H2ZM4 4H20V9H4V4ZM4 16V11H8V16H4ZM10 16V11H20V16H10Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconViewComfy;
