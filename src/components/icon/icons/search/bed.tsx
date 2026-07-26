import React from "react";
import { withIcon } from "../../hoc";

const IconBed = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M 21 10.78 L 21 8 C 21 6.35 19.65 5 18 5 L 14 5 C 13.23 5 12.53 5.3 12 5.78 C 11.47 5.3 10.77 5 10 5 L 6 5 C 4.35 5 3 6.35 3 8 L 3 10.78 C 2.39 11.33 2 12.12 2 13 L 2 19 L 4 19 L 4 17 L 20 17 L 20 19 L 22 19 L 22 13 C 22 12.12 21.61 11.33 21 10.78 Z M 14 7 L 18 7 C 18.55 7 19 7.45 19 8 L 19 10 L 13 10 L 13 8 C 13 7.45 13.45 7 14 7 Z M 5 8 C 5 7.45 5.45 7 6 7 L 10 7 C 10.55 7 11 7.45 11 8 L 11 10 L 5 10 L 5 8 Z M 4 15 L 4 13 C 4 12.45 4.45 12 5 12 L 19 12 C 19.55 12 20 12.45 20 13 L 20 15 L 4 15 Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconBed;
