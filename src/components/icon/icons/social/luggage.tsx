import React from "react";
import { withIcon } from "../../hoc";

const IconLuggage = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M 9.5 18 L 8 18 L 8 9 L 9.5 9 L 9.5 18 Z M 12.75 18 L 11.25 18 L 11.25 9 L 12.75 9 L 12.75 18 Z M 16 18 L 14.5 18 L 14.5 9 L 16 9 L 16 18 Z M 17 6 L 15 6 L 15 3 C 15 2.45 14.55 2 14 2 L 10 2 C 9.45 2 9 2.45 9 3 L 9 6 L 7 6 C 5.9 6 5 6.9 5 8 L 5 19 C 5 20.1 5.9 21 7 21 C 7 21.55 7.45 22 8 22 C 8.55 22 9 21.55 9 21 L 15 21 C 15 21.55 15.45 22 16 22 C 16.55 22 17 21.55 17 21 C 18.1 21 19 20.1 19 19 L 19 8 C 19 6.9 18.1 6 17 6 Z M 10.5 3.5 L 13.5 3.5 L 13.5 6 L 10.5 6 L 10.5 3.5 Z M 17 19 L 7 19 L 7 8 L 17 8 L 17 19 Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconLuggage;
