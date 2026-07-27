import React from "react";
import { withIcon } from "../../hoc";

const IconEscalatorWarning = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M 7 2 C 8.1 2 9 2.9 9 4 C 9 5.1 8.1 6 7 6 C 5.9 6 5 5.1 5 4 C 5 2.9 5.9 2 7 2 Z M 16 9.5 C 16 10.33 16.67 11 17.5 11 C 18.33 11 19 10.33 19 9.5 C 19 8.67 18.33 8 17.5 8 C 16.67 8 16 8.67 16 9.5 Z M 19 12 L 16.16 12 C 15.58 12.01 15.02 12.32 14.71 12.86 L 13.79 14.18 L 10.22 8 C 9.85 7.37 9.19 7.01 8.51 7 L 5.5 7 C 4.4 7 3.5 7.9 3.5 9 L 3.5 15 L 5 15 L 5 22 L 10 22 L 10 11.61 L 12.53 16 L 14.73 16 L 15.5 14.9 L 15.5 22 L 19.5 22 L 19.5 17 L 20.5 17 L 20.5 13.5 C 20.5 12.68 19.83 12 19 12 Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconEscalatorWarning;
