import React from "react";
import { withIcon } from "../../hoc";

const PanoramaVerticalSelect = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(2.3981, 0) scale(1.2)">
        <path
          d="M14.4998 10C14.4998 6.11 15.3398 3.05 15.9298 1.31C16.1498 0.67 15.6698 0 14.9798 0H0.999819C0.319819 0 -0.160181 0.66 0.0498188 1.31C0.739819 3.36 1.49982 6.1 1.49982 10C1.49982 13.87 0.739819 16.66 0.0498188 18.69C-0.160181 19.34 0.319819 20 0.999819 20H14.9998C15.6798 20 16.1698 19.34 15.9498 18.69C15.2698 16.66 14.4998 13.86 14.4998 10Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default PanoramaVerticalSelect;
