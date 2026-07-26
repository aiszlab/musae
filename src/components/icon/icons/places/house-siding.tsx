import React from "react";
import { withIcon } from "../../hoc";

const IconHouseSiding = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M 19 12.5 L 22 12.5 L 12 3.5 L 2 12.5 L 5 12.5 L 5 20.5 L 7 20.5 L 7 18.5 L 17 18.5 L 17 20.5 L 19 20.5 L 19 12.5 Z M 7.21 10.5 L 16.79 10.5 L 17 10.69 L 17 12.5 L 7 12.5 L 7 10.69 L 7.21 10.5 Z M 14.57 8.5 L 9.43 8.5 L 12 6.19 L 14.57 8.5 Z M 7 16.5 L 7 14.5 L 17 14.5 L 17 16.5 L 7 16.5 Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconHouseSiding;
