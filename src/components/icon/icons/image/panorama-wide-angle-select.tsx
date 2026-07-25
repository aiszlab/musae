import React from "react";
import { withIcon } from "../../hoc";

const PanoramaWideAngleSelect = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 2.4) scale(1.2)">
        <path
          d="M10 0C6.03 0 3.15 0.63 1 1C0.45 2.97 0 4.92 0 8C0 11.03 0.45 13.05 1 15C3.15 15.37 5.98 16 10 16C13.97 16 16.85 15.37 19 15C19.57 12.98 20 11.01 20 8C20 4.97 19.55 2.95 19 1C16.85 0.63 14.02 0 10 0Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default PanoramaWideAngleSelect;
