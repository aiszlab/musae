import React from "react";
import { withIcon } from "../../hoc";

const LocalDining = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 0.6051) scale(1.2552)">
        <path
          d="M5.36 10.2067L8.19 7.37666L1.17 0.366657C-0.39 1.92666 -0.39 4.45666 1.17 6.02666L5.36 10.2067ZM12.14 8.39666C13.67 9.10666 15.82 8.60666 17.41 7.01666C19.32 5.10666 19.69 2.36666 18.22 0.896657C16.76 -0.563343 14.02 -0.203343 12.1 1.70666C10.51 3.29666 10.01 5.44666 10.72 6.97666L0.96 16.7367L2.37 18.1467L9.26 11.2767L16.14 18.1567L17.55 16.7467L10.67 9.86666L12.14 8.39666Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default LocalDining;
