import React from "react";
import { withIcon } from "../../hoc";

const IconPersonOutline = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M 12 4.375 C 13.45 4.375 14.625 5.55 14.625 7 C 14.625 8.45 13.45 9.625 12 9.625 C 10.55 9.625 9.375 8.45 9.375 7 C 9.375 5.55 10.55 4.375 12 4.375 Z M 12 15.625 C 15.713 15.625 19.625 17.45 19.625 18.25 L 19.625 19.625 L 4.375 19.625 L 4.375 18.25 C 4.375 17.45 8.288 15.625 12 15.625 Z M 12 2 C 9.238 2 7 4.238 7 7 C 7 9.763 9.238 12 12 12 C 14.763 12 17 9.763 17 7 C 17 4.238 14.763 2 12 2 Z M 12 13.25 C 8.663 13.25 2 14.925 2 18.25 L 2 22 L 22 22 L 22 18.25 C 22 14.925 15.338 13.25 12 13.25 Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconPersonOutline;
