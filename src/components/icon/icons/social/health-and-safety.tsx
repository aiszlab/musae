import React from "react";
import { withIcon } from "../../hoc";

const HealthAndSafety = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M 10.5 13 L 8 13 L 8 10 L 10.5 10 L 10.5 7.5 L 13.5 7.5 L 13.5 10 L 16 10 L 16 13 L 13.5 13 L 13.5 15.5 L 10.5 15.5 L 10.5 13 Z M 12 2 L 4 5 L 4 11.09 C 4 16.14 7.41 20.85 12 22 C 16.59 20.85 20 16.14 20 11.09 L 20 5 L 12 2 Z M 18 11.09 C 18 15.09 15.45 18.79 12 19.92 C 8.55 18.79 6 15.1 6 11.09 L 6 6.39 L 12 4.14 L 18 6.39 L 18 11.09 Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default HealthAndSafety;
