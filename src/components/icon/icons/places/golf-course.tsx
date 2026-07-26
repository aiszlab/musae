import React from "react";
import { withIcon } from "../../hoc";

const IconGolfCourse = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M 19 21 C 19.828 21 20.5 20.328 20.5 19.5 C 20.5 18.672 19.828 18 19 18 C 18.172 18 17.5 18.672 17.5 19.5 C 17.5 20.328 18.172 21 19 21 Z"
        fill="currentColor"
      />
      <path
        d="M 16.5 5.92 L 8.5 2 L 8.5 20 L 6.5 20 L 6.5 18.27 C 4.71 18.62 3.5 19.26 3.5 20 C 3.5 21.1 6.19 22 9.5 22 C 12.81 22 15.5 21.1 15.5 20 C 15.5 19.01 13.34 18.19 10.5 18.03 L 10.5 8.98 L 16.5 5.92 Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconGolfCourse;
