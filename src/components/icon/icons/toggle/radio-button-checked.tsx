import React from "react";
import { withIcon } from "../../hoc";

const IconRadioButtonChecked = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M 12 2 C 6.48 2 2 6.48 2 12 C 2 17.52 6.48 22 12 22 C 17.52 22 22 17.52 22 12 C 22 6.48 17.52 2 12 2 Z M 12 20 C 7.58 20 4 16.42 4 12 C 4 7.58 7.58 4 12 4 C 16.42 4 20 7.58 20 12 C 20 16.42 16.42 20 12 20 Z"
        fill="currentColor"
      />
      <path
        d="M 12 17 C 14.761 17 17 14.761 17 12 C 17 9.239 14.761 7 12 7 C 9.239 7 7 9.239 7 12 C 7 14.761 9.239 17 12 17 Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconRadioButtonChecked;
