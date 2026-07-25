import React from "react";
import { withIcon } from "../../hoc";

const House = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M 19 9.8 L 19 4.5 L 16 4.5 L 16 7.1 L 12 3.5 L 2 12.5 L 5 12.5 L 5 20.5 L 11 20.5 L 11 14.5 L 13 14.5 L 13 20.5 L 19 20.5 L 19 12.5 L 22 12.5 L 19 9.8 Z M 17 18.5 L 15 18.5 L 15 12.5 L 9 12.5 L 9 18.5 L 7 18.5 L 7 10.69 L 12 6.19 L 17 10.69 L 17 18.5 Z"
        fill="currentColor"
      />
      <path
        d="M 10 10.5 L 14 10.5 C 14 9.4 13.1 8.5 12 8.5 C 10.9 8.5 10 9.4 10 10.5 Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default House;
