import React from "react";
import { withIcon } from "../../hoc";

const IconDining = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M 14.75 6 C 13.38 6 12.25 7.52 12.25 9.4 C 12.25 10.88 12.95 12.11 13.92 12.58 L 14 12.62 L 14 19 L 15.5 19 L 15.5 12.62 L 15.58 12.59 C 16.55 12.12 17.25 10.89 17.25 9.41 C 17.25 7.53 16.13 6 14.75 6 Z M 10.5 6 C 10.23 6 10 6.22 10 6.5 L 10 9 L 9.25 9 L 9.25 6.5 C 9.25 6.22 9.03 6 8.75 6 C 8.47 6 8.25 6.22 8.25 6.5 L 8.25 9 L 7.5 9 L 7.5 6.5 C 7.5 6.22 7.28 6 7 6 C 6.72 6 6.5 6.22 6.5 6.5 L 6.5 10.3 C 6.5 11.23 7.14 12.01 8 12.23 L 8 19 L 9.5 19 L 9.5 12.23 C 10.36 12.01 11 11.23 11 10.3 L 11 6.5 C 11 6.22 10.78 6 10.5 6 Z M 20 4 L 4 4 L 4 20 L 20 20 L 20 4 Z M 20 2 C 21.1 2 22 2.9 22 4 L 22 20 C 22 21.1 21.1 22 20 22 L 4 22 C 2.9 22 2 21.1 2 20 L 2 4 C 2 2.9 2.9 2 4 2 L 20 2 Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconDining;
