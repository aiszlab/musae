import React from "react";
import { withIcon } from "../../hoc";

const IconRunningWithErrors = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M 22 10 L 22 18 L 20 18 L 20 10 L 22 10 Z M 20 20 L 20 22 L 22 22 L 22 20 L 20 20 Z M 18 17.29 C 16.53 18.95 14.39 20 12 20 C 7.59 20 4 16.41 4 12 C 4 7.59 7.59 4 12 4 L 12 13 L 19.55 5.45 C 17.72 3.34 15.02 2 12 2 C 6.48 2 2 6.48 2 12 C 2 17.52 6.48 22 12 22 C 14.25 22 16.33 21.26 18 20 L 18 17.29 Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconRunningWithErrors;
