import React from "react";
import { withIcon } from "../../hoc";

const IconRiceBowl = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M 19.66 14 C 19 15.92 17.42 17.54 15.26 18.39 L 14 18.88 L 14 20 L 10 20 L 10 18.88 L 8.73 18.38 C 6.57 17.53 4.99 15.91 4.33 13.99 L 19.66 13.99 M 12 2 C 6.48 2 2 6.48 2 12 C 2 15.69 4.47 18.86 8 20.25 L 8 22 L 16 22 L 16 20.25 C 19.53 18.86 22 15.69 22 12 C 22 6.48 17.52 2 12 2 Z M 10 12 L 10 4.26 C 10.64 4.1 11.31 4 12 4 C 12.69 4 13.36 4.1 14 4.26 L 14 12 L 10 12 Z M 16 12 L 16 5.08 C 18.39 6.47 20 9.04 20 12 L 16 12 Z M 4 12 C 4 9.05 5.61 6.47 8 5.08 L 8 12 L 4 12 Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconRiceBowl;
