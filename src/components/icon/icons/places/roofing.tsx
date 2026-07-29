import React from "react";
import { withIcon } from "../../hoc";

const IconRoofing = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M13 18.5H11V16.5H13V18.5ZM15 14.5H9V20.5H15V14.5ZM19 9.8V4.5H16V7.1L12 3.5L2 12.5H5L12 6.19L19 12.5H22L19 9.8Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconRoofing;
