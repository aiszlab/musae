import React from "react";
import { withIcon } from "../../hoc";

const MobiledataOff = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 0) scale(1.2121)">
        <path
          d="M14.61 4.01L16.2 5.6L17.61 4.19L13.61 0.19L9.61 4.19L11.02 5.6L12.61 4.01V8.36L14.61 10.36V4.01Z"
          fill="currentColor"
        />
        <path
          d="M0 1.41L6.61 8.02V14.37L5.02 12.78L3.61 14.19L7.61 18.19L11.61 14.19L10.2 12.78L8.61 14.37V10.02L18.39 19.8L19.8 18.38L1.42 0L0 1.41Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default MobiledataOff;
