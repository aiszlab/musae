import React from "react";
import { withIcon } from "../../hoc";

const PanoramaHorizontal = withIcon(({ size }) => {
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
          d="M18 2.54V13.45C15.4 12.68 12.72 12.29 10 12.29C7.28 12.29 4.6 12.68 2 13.45V2.54C4.6 3.31 7.28 3.7 10 3.7C12.72 3.71 15.4 3.32 18 2.54ZM19.43 0C19.33 0 19.23 0.0199999 19.12 0.0599999C16.18 1.16 13.09 1.7 10 1.7C6.91 1.7 3.82 1.15 0.88 0.0599999C0.77 0.0199999 0.66 0 0.57 0C0.23 0 0 0.23 0 0.63V15.38C0 15.77 0.23 16 0.57 16C0.67 16 0.77 15.98 0.88 15.94C3.82 14.84 6.91 14.3 10 14.3C13.09 14.3 16.18 14.85 19.12 15.94C19.23 15.98 19.33 16 19.43 16C19.76 16 20 15.77 20 15.37V0.63C20 0.23 19.76 0 19.43 0Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default PanoramaHorizontal;
