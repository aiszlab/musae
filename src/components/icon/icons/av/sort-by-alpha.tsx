import React from "react";
import { withIcon } from "../../hoc";

const SortByAlpha = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 0.5037) scale(1.1852)">
        <path
          d="M13.34 2.36H8.62L10.98 0L13.34 2.36ZM8.65 17.07H13.31L10.98 19.4L8.65 17.07ZM4.5 3.97L0 15.43H1.84L2.76 12.98H7.87L8.79 15.43H10.63L6.14 3.97H4.5ZM3.37 11.34L5.31 6.16L7.25 11.34H3.37ZM14.13 13.84H20.25V15.43H11.72V14.14L17.64 5.58H11.76V3.98H20.06V5.24L14.13 13.84Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default SortByAlpha;
