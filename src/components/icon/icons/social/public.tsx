import React from "react";
import { withIcon } from "../../hoc";

const Public = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M 12 2 C 6.48 2 2 6.48 2 12 C 2 17.52 6.48 22 12 22 C 17.52 22 22 17.52 22 12 C 22 6.48 17.52 2 12 2 Z M 4 12 C 4 11.39 4.08 10.79 4.21 10.22 L 8.99 15 L 8.99 16 C 8.99 17.1 9.89 18 10.99 18 L 10.99 19.93 C 7.06 19.43 4 16.07 4 12 Z M 17.89 17.4 C 17.63 16.59 16.89 16 15.99 16 L 14.99 16 L 14.99 13 C 14.99 12.45 14.54 12 13.99 12 L 7.99 12 L 7.99 10 L 9.99 10 C 10.54 10 10.99 9.55 10.99 9 L 10.99 7 L 12.99 7 C 14.09 7 14.99 6.1 14.99 5 L 14.99 4.59 C 17.92 5.77 20 8.65 20 12 C 20 14.08 19.19 15.98 17.89 17.4 Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default Public;
