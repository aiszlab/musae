import React from "react";
import { withIcon } from "../../hoc";

const Bloodtype = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(2.4, 0) scale(1.2)">
        <path d="M11 14H5V16H11V14Z" fill="currentColor" />
        <path d="M9 7H7V9H5V11H7V13H9V11H11V9H9V7Z" fill="currentColor" />
        <path
          d="M8 0C2.67 4.55 0 8.48 0 11.8C0 16.78 3.8 20 8 20C12.2 20 16 16.78 16 11.8C16 8.48 13.33 4.55 8 0ZM8 18C4.65 18 2 15.43 2 11.8C2 9.46 3.95 6.36 8 2.66C12.05 6.36 14 9.45 14 11.8C14 15.43 11.35 18 8 18Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default Bloodtype;
