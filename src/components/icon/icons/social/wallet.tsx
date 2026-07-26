import React from "react";
import { withIcon } from "../../hoc";

const IconWallet = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M 18 4 L 6 4 C 3.79 4 2 5.79 2 8 L 2 16 C 2 18.21 3.79 20 6 20 L 18 20 C 20.21 20 22 18.21 22 16 L 22 8 C 22 5.79 20.21 4 18 4 Z M 16.14 13.77 C 15.9 13.97 15.57 14.05 15.26 13.97 L 4.15 11.25 C 4.45 10.52 5.16 10 6 10 L 18 10 C 18.67 10 19.26 10.34 19.63 10.84 L 16.14 13.77 Z M 6 6 L 18 6 C 19.1 6 20 6.9 20 8 L 20 8.55 C 19.41 8.21 18.73 8 18 8 L 6 8 C 5.27 8 4.59 8.21 4 8.55 L 4 8 C 4 6.9 4.9 6 6 6 Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconWallet;
