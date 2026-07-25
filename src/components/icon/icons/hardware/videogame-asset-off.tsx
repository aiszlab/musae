import React from "react";
import { withIcon } from "../../hoc";

const VideogameAssetOff = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 0.4716) scale(1.1645)">
        <path
          d="M16.11 6.19C16.94 6.19 17.61 6.86 17.61 7.69C17.61 8.52 16.94 9.19 16.11 9.19C15.28 9.19 14.61 8.52 14.61 7.69C14.61 6.86 15.28 6.19 16.11 6.19ZM9.44 5.19H18.61V13.19H17.44L19.31 15.06C20.06 14.77 20.61 14.04 20.61 13.19V5.19C20.61 4.09 19.71 3.19 18.61 3.19H7.44L9.44 5.19ZM18.39 19.8L13.78 15.19H2.61C1.51 15.19 0.61 14.29 0.61 13.19V5.19C0.61 4.34 1.16 3.61 1.91 3.32L0 1.41L1.41 0L19.79 18.38L18.39 19.8ZM11.78 13.19L8.78 10.19H7.61V12.19H5.61V10.19H3.61V8.19H5.61V7.02L3.78 5.19H2.61V13.19H11.78Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default VideogameAssetOff;
