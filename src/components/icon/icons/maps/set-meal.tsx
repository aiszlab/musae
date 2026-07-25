import React from "react";
import { withIcon } from "../../hoc";

const SetMeal = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 1.6473) scale(1.0909)">
        <path
          d="M20.05 15.56L2.08 16.5L2 15L19.98 14.06L20.05 15.56ZM20 17.48H2V18.98H20V17.48ZM22 11V2C22 0.9 21.1 0 20 0H2C0.9 0 0 0.9 0 2V11C0 12.1 0.9 13 2 13H20C21.1 13 22 12.1 22 11ZM20 11H2V2H20V11ZM19 4C17.32 4 15.96 4.98 15.79 6.23C15.15 5.5 13.06 3.5 9.25 3.5C4.58 3.5 2.5 6.5 2.5 6.5C2.5 6.5 4.58 9.5 9.25 9.5C13.06 9.5 15.15 7.5 15.79 6.77C15.96 8.02 17.32 9 19 9V4Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default SetMeal;
