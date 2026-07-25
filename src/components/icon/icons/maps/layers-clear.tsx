import React from "react";
import { withIcon } from "../../hoc";

const LayersClear = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0.0416, 0) scale(1.1875)">
        <path
          d="M10 3.67L15.74 8.14L13.85 9.61L15.28 11.03L19 8.14L10 1.14L7.41 3.16L8.83 4.58L10 3.67ZM19 13.21L17.37 11.94L16.7 12.46L18.13 13.89L19 13.21ZM1.41 0L0 1.41L4.22 5.63L1 8.14L10 15.14L12.1 13.51L13.52 14.93L9.99 17.68L2.62 11.95L1 13.21L10 20.21L14.95 16.36L18.73 20.14L20.14 18.73L1.41 0ZM10 12.61L4.26 8.14L5.65 7.06L10.67 12.08L10 12.61Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default LayersClear;
