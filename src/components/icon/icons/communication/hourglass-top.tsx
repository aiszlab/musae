import React from "react";
import { withIcon } from "../../hoc";

const HourglassTop = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(4.8, 0) scale(1.2)">
        <path
          d="M0 0L0.0100002 6L4 10L0.0100002 14.01L0 20H12V14L8 10L12 6.01V0H0ZM10 14.5V18H2V14.5L6 10.5L10 14.5Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default HourglassTop;
