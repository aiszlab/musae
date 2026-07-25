import React from "react";
import { withIcon } from "../../hoc";

const PinDrop = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(3.6, 0) scale(1.2)">
        <path
          d="M7 2C8.93 2 12 3.4 12 7.15C12 9.31 10.28 11.82 7 14.47C3.72 11.82 2 9.3 2 7.15C2 3.4 5.07 2 7 2ZM7 0C3.73 0 0 2.46 0 7.15C0 10.27 2.33 13.56 7 17C11.67 13.56 14 10.27 14 7.15C14 2.46 10.27 0 7 0Z"
          fill="currentColor"
        />
        <path
          d="M7 5C5.9 5 5 5.9 5 7C5 8.1 5.9 9 7 9C7.53043 9 8.03914 8.78929 8.41421 8.41421C8.78929 8.03914 9 7.53043 9 7C9 6.46957 8.78929 5.96086 8.41421 5.58579C8.03914 5.21071 7.53043 5 7 5ZM0 18H14V20H0V18Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default PinDrop;
