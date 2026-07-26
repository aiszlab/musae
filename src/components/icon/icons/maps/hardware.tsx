import React from "react";
import { withIcon } from "../../hoc";

const IconHardware = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M18 3L15 6V3H9C6.24 3 4 5.24 4 8H9V20C9 20.55 9.45 21 10 21H14C14.55 21 15 20.55 15 20V8L18 11H20V3H18ZM13 19H11V13H13V19ZM11 11V6H6.77C7.32 5.39 8.11 5 9 5H13V11H11Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconHardware;
