import React from "react";
import { withIcon } from "../../hoc";

const IconFoundation = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M 19 12.5 L 22 12.5 L 12 3.5 L 2 12.5 L 5 12.5 L 5 15.5 L 3 15.5 L 3 17.5 L 5 17.5 L 5 20.5 L 7 20.5 L 7 17.5 L 11 17.5 L 11 20.5 L 13 20.5 L 13 17.5 L 17 17.5 L 17 20.5 L 19 20.5 L 19 17.5 L 21 17.5 L 21 15.5 L 19 15.5 L 19 12.5 Z M 7 15.5 L 7 10.69 L 11 7.09 L 11 15.5 L 7 15.5 Z M 13 15.5 L 13 7.09 L 17 10.69 L 17 15.5 L 13 15.5 Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconFoundation;
