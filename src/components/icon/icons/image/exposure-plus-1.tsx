import React from "react";
import { withIcon } from "../../hoc";

const IconExposurePlus1 = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M10 6H8V10H4V12H8V16H10V12H14V10H10V6ZM20 17H18V6.38L15 7.4V5.7L19.7 4H20V17Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconExposurePlus1;
