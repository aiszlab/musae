import React from "react";
import { withIcon } from "../../hoc";

const NearMe = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 0) scale(1.3333)">
        <path
          d="M14.27 3.73L10.03 13.86L8.39 9.61L7.57 9.29L4.14 7.96L14.27 3.73ZM18 0L0 7.53V8.51L6.84 11.16L9.48 18H10.46L18 0Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default NearMe;
