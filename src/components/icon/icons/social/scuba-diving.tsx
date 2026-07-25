import React from "react";
import { withIcon } from "../../hoc";

const ScubaDiving = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M 2 12.455 C 2 11.455 2.818 10.636 3.818 10.636 C 4.818 10.636 5.636 11.455 5.636 12.455 C 5.636 13.455 4.818 14.273 3.818 14.273 C 2.818 14.273 2 13.455 2 12.455 Z M 9.173 9.827 L 13.291 8.727 L 12.582 6.091 L 8.464 7.191 C 7.736 7.382 7.3 8.136 7.5 8.864 C 7.7 9.591 8.445 10.027 9.173 9.827 Z M 19.727 6 L 22 3.364 L 21.091 2.455 L 18.364 5.182 L 16.545 8.818 L 7.927 11.427 C 7.182 11.609 6.664 12.236 6.564 12.955 L 5.855 17 L 3.273 20.455 L 4.727 21.545 L 7.455 17.909 L 8.491 15.055 L 13.818 13.364 L 18.364 10.182 L 19.727 6 Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default ScubaDiving;
