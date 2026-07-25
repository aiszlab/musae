import React from "react";
import { withIcon } from "../../hoc";

const ScreenRotationAlt = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 0.006) scale(1.2)">
        <path
          d="M2 5.585L7 0.585C7.78 -0.195 9.05 -0.195 9.83 0.585L18.24 8.995H15.41L8.4 1.995L3.41 6.995H6V8.995H0V2.995H2V5.585ZM18 16.995H20V10.995H14V12.995H16.59L11.6 17.995L4.59 10.995H1.76L10.17 19.405C10.95 20.185 12.22 20.185 13 19.405L18 14.405V16.995Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default ScreenRotationAlt;
