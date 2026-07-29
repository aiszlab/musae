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
        d="M2 4V20H22V4H2ZM4 6H20V11H4V6ZM4 18V13H8V18H4ZM10 18V13H20V18H10Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconViewComfy;
