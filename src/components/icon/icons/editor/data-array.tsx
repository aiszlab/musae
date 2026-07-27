import React from "react";
import { withIcon } from "../../hoc";

const IconDataArray = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path d="M15 4V6H18V18H15V20H20V4H15Z" fill="currentColor" />
      <path d="M4 20H9V18H6V6H9V4H4V20Z" fill="currentColor" />
    </svg>
  );
});

export default IconDataArray;
