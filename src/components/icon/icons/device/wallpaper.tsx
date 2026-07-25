import React from "react";
import { withIcon } from "../../hoc";

const Wallpaper = withIcon(({ size }) => {
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
          d="M2 2H9V0H2C0.9 0 0 0.9 0 2V9H2V2ZM8 11L4 16H16L13 12L10.97 14.71L8 11ZM15 6.5C15 5.67 14.33 5 13.5 5C12.67 5 12 5.67 12 6.5C12 7.33 12.67 8 13.5 8C14.33 8 15 7.33 15 6.5ZM18 0H11V2H18V9H20V2C20 0.9 19.1 0 18 0ZM18 18H11V20H18C19.1 20 20 19.1 20 18V11H18V18ZM2 11H0V18C0 19.1 0.9 20 2 20H9V18H2V11Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default Wallpaper;
