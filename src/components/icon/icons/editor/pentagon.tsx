import React from "react";
import { withIcon } from "../../hoc";

const IconPentagon = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M19.63 10.28L16.56 19.5H7.44L4.37 10.28L12 4.94L19.63 10.28ZM2 9.5L6 21.5H18L22 9.5L12 2.5L2 9.5Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconPentagon;
