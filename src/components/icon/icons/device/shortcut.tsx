import React from "react";
import { withIcon } from "../../hoc";

const Shortcut = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 2.6667) scale(1.3333)">
        <path
          d="M12 0L10.59 1.41L12 2.83L14.17 5H5C2.24 5 0 7.24 0 10V14H2V10C2 8.35 3.35 7 5 7H14.17L10.59 10.58L12 12L18 6L12 0Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default Shortcut;
