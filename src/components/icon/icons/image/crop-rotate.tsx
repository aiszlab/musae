import React from "react";
import { withIcon } from "../../hoc";

const CropRotate = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(2.6667, 0) scale(1.3333)">
        <path
          d="M12 0H2C0.9 0 0 0.9 0 2V16C0 17.1 0.9 18 2 18H12C13.1 18 14 17.1 14 16V2C14 0.9 13.1 0 12 0ZM12 16H2V2H12V16Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default CropRotate;
