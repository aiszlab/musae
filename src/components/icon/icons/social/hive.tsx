import React from "react";
import { withIcon } from "../../hoc";

const IconHive = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M 21.5 9 L 19.25 5 L 15.94 5 L 14.25 2 L 9.75 2 L 8.06 5 L 4.75 5 L 2.5 9 L 4.19 12 L 2.5 15 L 4.75 19 L 8.06 19 L 9.75 22 L 14.25 22 L 15.94 19 L 19.25 19 L 21.5 15 L 19.81 12 L 21.5 9 Z M 19.21 9 L 18.09 11 L 15.95 11 L 14.83 9 L 15.95 7 L 18.09 7 L 19.21 9 Z M 10.94 14 L 9.82 12 L 10.94 10 L 13.06 10 L 14.18 12 L 13.06 14 L 10.94 14 Z M 13.08 4 L 14.2 5.98 L 13.06 8 L 10.94 8 L 9.8 5.98 L 10.92 4 L 13.08 4 Z M 5.92 7 L 8.06 7 L 9.18 9 L 8.06 11 L 5.92 11 L 4.79 9 L 5.92 7 Z M 4.79 15 L 5.91 13 L 8.05 13 L 9.17 15 L 8.05 17 L 5.92 17 L 4.79 15 Z M 10.92 20 L 9.8 18.02 L 10.94 16 L 13.06 16 L 14.19 18.02 L 13.08 20 L 10.92 20 Z M 18.08 17 L 15.94 17 L 14.82 15 L 15.94 13 L 18.08 13 L 19.2 15 L 18.08 17 Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconHive;
