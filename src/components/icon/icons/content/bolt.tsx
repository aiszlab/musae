import React from "react";
import { withIcon } from "../../hoc";

const Bolt = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(5.3299, 0) scale(1.3333)">
        <path
          d="M3.99802 18H2.99802L3.99802 11H0.498018C-0.381982 11 0.168018 10.25 0.188018 10.22C1.47802 7.94 3.41802 4.54 6.00802 0H7.00802L6.00802 7H9.51802C9.91802 7 10.138 7.19 9.91802 7.66C5.96802 14.55 3.99802 18 3.99802 18Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default Bolt;
