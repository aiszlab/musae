import React from "react";
import { withIcon } from "../../hoc";

const DoNotDisturbOnTotalSilence = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 0) scale(1.2)">
        <path
          d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18ZM10 4C6.7 4 4 6.7 4 10C4 13.3 6.7 16 10 16C13.3 16 16 13.3 16 10C16 6.7 13.4 4 10 4ZM13 11H7V9H13V11Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default DoNotDisturbOnTotalSilence;
