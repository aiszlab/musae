import React from "react";
import { withIcon } from "../../hoc";

const NoMeals = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0.0563, 0) scale(1.1262)">
        <path
          d="M15.31 12V4C15.31 2.24 17.55 0 20.31 0V16.17L18.31 14.17V12H15.31ZM19.8 21.31L9.33 10.85C9 10.94 8.67 11 8.31 11V20H6.31V11C4.1 11 2.31 9.21 2.31 7V3.83L0 1.51L1.41 0.0999999L21.21 19.9L19.8 21.31ZM5.48 7L4.31 5.83V7H5.48ZM8.31 0H6.31V2.17L8.31 4.17V0ZM12.31 7V0H10.31V6.17L12.16 8.02C12.25 7.69 12.31 7.36 12.31 7Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default NoMeals;
