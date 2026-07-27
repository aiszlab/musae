import React from "react";
import { withIcon } from "../../hoc";

const IconSingleBed = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M 22 12 C 22 10.625 20.875 9.5 19.5 9.5 L 19.5 5.75 C 19.5 4.375 18.375 3.25 17 3.25 L 7 3.25 C 5.625 3.25 4.5 4.375 4.5 5.75 L 4.5 9.5 C 3.125 9.5 2 10.625 2 12 L 2 18.25 L 3.663 18.25 L 4.5 20.75 L 5.75 20.75 L 6.588 18.25 L 17.425 18.25 L 18.25 20.75 L 19.5 20.75 L 20.338 18.25 L 22 18.25 L 22 12 Z M 17 9.5 L 13.25 9.5 L 13.25 5.75 L 17 5.75 L 17 9.5 Z M 7 5.75 L 10.75 5.75 L 10.75 9.5 L 7 9.5 L 7 5.75 Z M 4.5 12 L 19.5 12 L 19.5 15.75 L 4.5 15.75 L 4.5 12 Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconSingleBed;
