import React from "react";
import { withIcon } from "../../hoc";

const IconPartyMode = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M 20 5 L 16.83 5 L 15 3 L 9 3 L 7.17 5 L 4 5 C 2.9 5 2 5.9 2 7 L 2 19 C 2 20.1 2.9 21 4 21 L 20 21 C 21.1 21 22 20.1 22 19 L 22 7 C 22 5.9 21.1 5 20 5 Z M 20 19 L 4 19 L 4 7 L 8.05 7 L 8.64 6.35 L 9.88 5 L 14.12 5 L 15.36 6.35 L 15.95 7 L 20 7 L 20 19 Z M 9 13 C 9 11.34 10.34 10 12 10 L 15.98 10 C 15.06 8.79 13.63 8 12 8 C 9.24 8 7 10.24 7 13 C 7 13.34 7.04 13.68 7.1 14 L 9.18 14 C 9.07 13.69 9 13.35 9 13 Z M 15 13 C 15 14.66 13.66 16 12 16 L 8.02 16 C 8.94 17.21 10.37 18 12 18 C 14.76 18 17 15.76 17 13 C 17 12.66 16.97 12.32 16.9 12 L 14.82 12 C 14.93 12.31 15 12.65 15 13 Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconPartyMode;
