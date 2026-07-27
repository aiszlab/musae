import React from "react";
import { withIcon } from "../../hoc";

const IconEventAvailable = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M 19 4 L 18 4 L 18 2 L 16 2 L 16 4 L 8 4 L 8 2 L 6 2 L 6 4 L 5 4 C 3.9 4 3 4.9 3 6 L 3 20 C 3 21.1 3.9 22 5 22 L 19 22 C 20.1 22 21 21.1 21 20 L 21 6 C 21 4.9 20.1 4 19 4 Z M 19 20 L 5 20 L 5 10 L 19 10 L 19 20 Z M 5 8 L 5 6 L 19 6 L 19 8 L 5 8 Z M 10.56 18.46 L 16.49 12.53 L 15.43 11.47 L 10.56 16.34 L 8.45 14.23 L 7.39 15.29 L 10.56 18.46 Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconEventAvailable;
