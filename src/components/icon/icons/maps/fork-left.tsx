import React from "react";
import { withIcon } from "../../hoc";

const IconForkLeft = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M10.41 15.59L9 17L5 13L9 9L10.41 10.41L8.83 12C10.34 11.67 12.56 12.08 14 13.36V6.83L12.41 8.42L11 7L15 3L19 7L17.59 8.41L16 6.83V21H14V17C13.27 14.42 10.93 13.53 8.83 14L10.41 15.59Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconForkLeft;
