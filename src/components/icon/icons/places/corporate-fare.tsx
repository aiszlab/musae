import React from "react";
import { withIcon } from "../../hoc";

const IconCorporateFare = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M 12 7 L 12 3 L 2 3 L 2 21 L 22 21 L 22 7 L 12 7 Z M 10 19 L 4 19 L 4 17 L 10 17 L 10 19 Z M 10 15 L 4 15 L 4 13 L 10 13 L 10 15 Z M 10 11 L 4 11 L 4 9 L 10 9 L 10 11 Z M 10 7 L 4 7 L 4 5 L 10 5 L 10 7 Z M 20 19 L 12 19 L 12 9 L 20 9 L 20 19 Z M 18 11 L 14 11 L 14 13 L 18 13 L 18 11 Z M 18 15 L 14 15 L 14 17 L 18 17 L 18 15 Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconCorporateFare;
