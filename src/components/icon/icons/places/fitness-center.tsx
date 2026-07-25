import React from "react";
import { withIcon } from "../../hoc";

const FitnessCenter = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M 20.57 14.86 L 22 13.43 L 20.57 12 L 17 15.57 L 8.43 7 L 12 3.43 L 10.57 2 L 9.14 3.43 L 7.71 2 L 5.57 4.14 L 4.14 2.71 L 2.71 4.14 L 4.14 5.57 L 2 7.71 L 3.43 9.14 L 2 10.57 L 3.43 12 L 7 8.43 L 15.57 17 L 12 20.57 L 13.43 22 L 14.86 20.57 L 16.29 22 L 18.43 19.86 L 19.86 21.29 L 21.29 19.86 L 19.86 18.43 L 22 16.29 L 20.57 14.86 Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default FitnessCenter;
