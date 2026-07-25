import React from "react";
import { withIcon } from "../../hoc";

const PanoramaWideAngle = withIcon(({ size }) => {
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
          d="M10 2C12.45 2 14.71 2.2 17.29 2.64C17.76 4.42 18 6.22 18 8C18 9.78 17.76 11.58 17.29 13.36C14.71 13.8 12.45 14 10 14C7.55 14 5.29 13.8 2.71 13.36C2.24 11.58 2 9.78 2 8C2 6.22 2.24 4.42 2.71 2.64C5.29 2.2 7.55 2 10 2ZM10 0C7.27 0 4.78 0.24 2.05 0.72L1.12 0.88L0.87 1.78C0.29 3.85 0 5.93 0 8C0 10.07 0.29 12.15 0.87 14.22L1.12 15.11L2.05 15.27C4.78 15.76 7.27 16 10 16C12.73 16 15.22 15.76 17.95 15.28L18.88 15.12L19.13 14.23C19.71 12.15 20 10.07 20 8C20 5.93 19.71 3.85 19.13 1.78L18.88 0.89L17.95 0.73C15.22 0.24 12.73 0 10 0Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default PanoramaWideAngle;
