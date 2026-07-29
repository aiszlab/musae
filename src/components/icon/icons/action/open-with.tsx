import React from "react";
import { withIcon } from "../../hoc";

const IconOpenWith = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M10 9H14V6H17L12 1L7 6H10V9ZM9 10H6V7L1 12L6 17V14H9V10ZM23 12L18 7V10H15V14H18V17L23 12ZM14 15H10V18H7L12 23L17 18H14V15Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconOpenWith;
