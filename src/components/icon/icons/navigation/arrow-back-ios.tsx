import React from "react";
import { withIcon } from "../../hoc";

const ArrowBackIos = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(4.9273, 0) scale(1.2121)">
        <path
          d="M11.67 1.77L9.89 0L0 9.9L9.9 19.8L11.67 18.03L3.54 9.9L11.67 1.77Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default ArrowBackIos;
