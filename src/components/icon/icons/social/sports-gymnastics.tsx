import React from "react";
import { withIcon } from "../../hoc";

const SportsGymnastics = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M 4.727 5.636 C 4.727 4.636 5.545 3.818 6.545 3.818 C 7.545 3.818 8.364 4.636 8.364 5.636 C 8.364 6.636 7.545 7.455 6.545 7.455 C 5.545 7.455 4.727 6.636 4.727 5.636 Z M 2 8.364 L 7.455 8.364 L 13.818 3.818 L 15.009 5.2 L 11.218 7.909 L 13.818 7.909 L 20.909 3.818 L 22 5.091 L 14.273 11.091 L 13.818 20.182 L 12 20.182 L 11.545 11.091 L 8.364 10.182 L 2 10.182 L 2 8.364 Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default SportsGymnastics;
