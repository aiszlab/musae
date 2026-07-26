import React from "react";
import { withIcon } from "../../hoc";

const IconWifi = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M 2 9.071 L 3.818 10.889 C 8.336 6.371 15.664 6.371 20.182 10.889 L 22 9.071 C 16.482 3.553 7.527 3.553 2 9.071 Z M 9.273 16.343 L 12 19.07 L 14.727 16.343 C 13.227 14.834 10.782 14.834 9.273 16.343 Z M 5.636 12.706 L 7.455 14.525 C 9.964 12.015 14.036 12.015 16.545 14.525 L 18.364 12.706 C 14.855 9.197 9.155 9.197 5.636 12.706 Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconWifi;
