import React from "react";
import { withIcon } from "../../hoc";

const MovieFilter = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 2.3952) scale(1.2006)">
        <path
          d="M7.99 7L7.05 9.06L4.99 10L7.05 10.94L7.99 13L8.93 10.94L10.99 10L8.93 9.06L7.99 7ZM16 0L18 4H15L13 0H11L13 4H10L8 0H6L8 4H5L3 0H2C0.9 0 0.00999999 0.9 0.00999999 2L0 14C0 15.1 0.9 16 2 16H18C19.1 16 19.99 15.1 19.99 14V0H16ZM18 14H2V2.47L3.76 6H13.99L13.36 7.37L11.99 8L13.36 8.63L13.99 10L14.62 8.63L15.99 8L14.62 7.37L13.99 6H18V14Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default MovieFilter;
