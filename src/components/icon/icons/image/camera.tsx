import React from "react";
import { withIcon } from "../../hoc";

const Camera = withIcon(({ size }) => {
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
          d="M12.25 0.26L12.17 0.22L12.16 0.24C11.46 0.09 10.74 0 10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 5.25 16.69 1.28 12.25 0.26ZM17.41 7H9.42L12.13 2.3C14.53 2.96 16.48 4.72 17.41 7ZM11.1 2.08L7.12 9L4.4 4.3C5.84 2.88 7.82 2 10 2C10.37 2 10.74 2.03 11.1 2.08ZM3.7 5.09L6.54 10L7.69 12H2.26C2.1 11.36 2 10.69 2 10C2 8.15 2.64 6.45 3.7 5.09ZM2.59 13H10.57L7.86 17.7C5.46 17.03 3.52 15.28 2.59 13ZM8.9 17.91L12.89 11L15.61 15.7C14.16 17.12 12.18 18 10 18C9.62 18 9.26 17.96 8.9 17.91ZM16.3 14.91L12.3 8H17.73C17.9 8.64 18 9.31 18 10C18 11.85 17.36 13.55 16.3 14.91Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default Camera;
