import React from "react";
import { withIcon } from "../../hoc";

const TypeSpecimen = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 0) scale(1.2)">
        <path d="M2 4H0V18C0 19.1 0.9 20 2 20H16V18H2V4Z" fill="currentColor" />
        <path
          d="M18 0H6C4.9 0 4 0.9 4 2V14C4 15.1 4.9 16 6 16H18C19.1 16 20 15.1 20 14V2C20 0.9 19.1 0 18 0ZM18 14H6V2H18V14Z"
          fill="currentColor"
        />
        <path
          d="M10.19 10.2H13.82L14.62 12.5H16.18L12.8 3.5H11.2L7.82 12.5H9.38L10.19 10.2ZM11.96 5.17H12.04L13.35 8.89H10.66L11.96 5.17Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default TypeSpecimen;
