import React from "react";
import { withIcon } from "../../hoc";

const IconSdCard = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M 18 2 L 10 2 L 4 8 L 4 20 C 4 21.1 4.9 22 6 22 L 18 22 C 19.1 22 20 21.1 20 20 L 20 4 C 20 2.9 19.1 2 18 2 Z M 18 20 L 6 20 L 6 8.83 L 10.83 4 L 18 4 L 18 20 Z M 9 7 L 11 7 L 11 11 L 9 11 L 9 7 Z M 12 7 L 14 7 L 14 11 L 12 11 L 12 7 Z M 15 7 L 17 7 L 17 11 L 15 11 L 15 7 Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconSdCard;
