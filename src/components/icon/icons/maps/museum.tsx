import React from "react";
import { withIcon } from "../../hoc";

const IconMuseum = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M22 11V9L12 2L2 9V11H4V20H2V22H22V20H20V11H22ZM18 20H6V9H18V20Z"
        fill="currentColor"
      />
      <path d="M10 14L12 17L14 14V18H16V11H14L12 14L10 11H8V18H10V14Z" fill="currentColor" />
    </svg>
  );
});

export default IconMuseum;
