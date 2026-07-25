import React from "react";
import { withIcon } from "../../hoc";

const PrintDisabled = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 0) scale(1.0733)">
        <path
          d="M1.41 0L0 1.41L5 6.4C3.34 6.4 2 7.74 2 9.4V15.4H6V19.4H18L20.95 22.36L22.36 20.95L1.41 0ZM6 13.4H4V9.4C4 8.85 4.45 8.4 5 8.4H7L10 11.4H6V13.4ZM8 17.4V13.4H12L16 17.4H8ZM8 3.4H16V6.4H10.66L12.66 8.4H19C19.55 8.4 20 8.85 20 9.4V13.4L18 13.41V11.4H15.66L19.66 15.4H22V9.4C22 7.74 20.66 6.4 19 6.4H18V1.4H6V1.76L8 3.76V3.4Z"
          fill="currentColor"
        />
        <path
          d="M18 10.91C18.5523 10.91 19 10.4623 19 9.91C19 9.35772 18.5523 8.91 18 8.91C17.4477 8.91 17 9.35772 17 9.91C17 10.4623 17.4477 10.91 18 10.91Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default PrintDisabled;
