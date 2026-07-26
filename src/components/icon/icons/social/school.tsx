import React from "react";
import { withIcon } from "../../hoc";

const IconSchool = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M 12 3.818 L 2 9.273 L 5.636 11.255 L 5.636 16.709 L 12 20.182 L 18.364 16.709 L 18.364 11.255 L 20.182 10.264 L 20.182 16.545 L 22 16.545 L 22 9.273 L 12 3.818 Z M 18.2 9.273 L 12 12.655 L 5.8 9.273 L 12 5.891 L 18.2 9.273 Z M 16.545 15.627 L 12 18.109 L 7.455 15.627 L 7.455 12.245 L 12 14.727 L 16.545 12.245 L 16.545 15.627 Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconSchool;
