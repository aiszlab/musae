import React from "react";
import { withIcon } from "../../hoc";

const CloudCircle = withIcon(({ size }) => {
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
          d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18ZM14.29 8.19C13.89 6.18 12.13 4.67 10 4.67C8.31 4.67 6.85 5.63 6.12 7.03C4.36 7.21 3 8.7 3 10.5C3 12.43 4.57 14 6.5 14H14.08C15.69 14 17 12.69 17 11.08C17 9.54 15.8 8.29 14.29 8.19ZM14 12H6.5C5.67 12 5 11.33 5 10.5C5 9.67 5.67 9 6.5 9H7.4L7.89 7.95C8.3 7.16 9.11 6.67 10 6.67C11.13 6.67 12.11 7.47 12.33 8.58L12.61 10H14C14.55 10 15 10.45 15 11C15 11.55 14.55 12 14 12Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default CloudCircle;
