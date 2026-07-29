import React from "react";
import { withIcon } from "../../hoc";

const IconWarehouse = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M20 8.35V19H18V11H6V19H4V8.35L12 5.15L20 8.35ZM22 21V7L12 3L2 7V21H8V13H16V21H22ZM11 19H9V21H11V19ZM13 16H11V18H13V16ZM15 19H13V21H15V19Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconWarehouse;
