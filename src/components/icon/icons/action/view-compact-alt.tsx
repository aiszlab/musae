import React from "react";
import { withIcon } from "../../hoc";

const IconViewCompactAlt = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        fill="currentColor"
        d="M20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 18H4V6H20V18Z"
      />
      <path
        d="M8 8H11V11H8V8ZM13 8H16V11H13V8ZM8 13H11V16H8V13ZM13 13H16V16H13V13Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconViewCompactAlt;
