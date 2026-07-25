import React from "react";
import { withIcon } from "../../hoc";

const Tornado = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M 22 3.364 L 2 3.364 L 12 20.636 L 22 3.364 Z M 18.845 5.182 L 17.264 7.909 L 6.736 7.909 L 5.155 5.182 L 18.845 5.182 Z M 10.418 14.273 L 13.582 14.273 L 12 17.009 L 10.418 14.273 Z M 14.636 12.455 L 9.364 12.455 L 7.782 9.727 L 16.209 9.727 L 14.636 12.455 Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default Tornado;
