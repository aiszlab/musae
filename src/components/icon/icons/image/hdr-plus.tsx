import React from "react";
import { withIcon } from "../../hoc";

const HdrPlus = withIcon(({ size }) => {
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
          d="M6.13 17C7.28 17.64 8.6 18 10 18C14.41 18 18 14.41 18 10C18 5.59 14.41 2 10 2C5.59 2 2 5.59 2 10C2 12.52 3.17 14.77 5 16.24V11H8.5C9.3 11 10 11.7 10 12.5V13.5C10 14.1 9.6 14.6 9.1 14.9L10 17H8.5L7.6 15H6.5V17H6.13ZM10 0C15.52 0 20 4.48 20 10C20 15.52 15.52 20 10 20C4.48 20 0 15.52 0 10C0 4.48 4.48 0 10 0ZM15.5 14H14V15.5H12.5V14H11V12.5H12.5V11H14V12.49H15.5V14ZM8.5 13.5V12.5H6.5V13.5H8.5ZM8.5 6V4H10V10H8.5V7.5H6.5V10H5V4H6.5V6H8.5ZM14 4C14.8 4 15.5 4.7 15.5 5.5V8.5C15.5 9.3 14.8 10 14 10H11V4H14ZM14 8.5V5.5H12.5V8.5H14Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default HdrPlus;
