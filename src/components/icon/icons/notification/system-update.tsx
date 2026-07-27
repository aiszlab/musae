import React from "react";
import { withIcon } from "../../hoc";

const IconSystemUpdate = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M 16.545 2.009 L 7.455 2 C 6.455 2 5.636 2.818 5.636 3.818 L 5.636 20.182 C 5.636 21.182 6.455 22 7.455 22 L 16.545 22 C 17.545 22 18.364 21.182 18.364 20.182 L 18.364 3.818 C 18.364 2.818 17.545 2.009 16.545 2.009 Z M 16.545 18.364 L 7.455 18.364 L 7.455 5.636 L 16.545 5.636 L 16.545 18.364 Z M 15.636 12.909 L 12.909 12.909 L 12.909 8.364 L 11.091 8.364 L 11.091 12.909 L 8.364 12.909 L 12 16.545 L 15.636 12.909 Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconSystemUpdate;
