import React from "react";
import { withIcon } from "../../hoc";

const IconNoAdultContent = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M 12 2 C 6.48 2 2 6.48 2 12 C 2 17.52 6.48 22 12 22 C 17.52 22 22 17.52 22 12 C 22 6.48 17.52 2 12 2 Z M 4 12 C 4 10.15 4.63 8.46 5.69 7.1 L 7.59 9 L 10.42 9 L 7.1 5.69 C 8.46 4.63 10.15 4 12 4 C 16.41 4 20 7.59 20 12 C 20 13.85 19.37 15.54 18.31 16.9 L 16.41 15 L 13.58 15 L 16.89 18.31 C 15.54 19.37 13.85 20 12 20 C 7.59 20 4 16.41 4 12 Z"
        fill="currentColor"
      />
      <path
        d="M 14.25 14 L 12.75 12 L 14.25 10 L 12.75 10 L 12 11 L 11.25 10 L 9.75 10 L 11.25 12 L 9.75 14 L 11.25 14 L 12 13 L 12.75 14 L 14.25 14 Z"
        fill="currentColor"
      />
      <path
        d="M 8 10 L 7.25 11 L 6.5 10 L 5 10 L 6.5 12 L 5 14 L 6.5 14 L 7.25 13 L 8 14 L 9.5 14 L 8 12 L 9.5 10 L 8 10 Z"
        fill="currentColor"
      />
      <path
        d="M 16 14 L 16.75 13 L 17.5 14 L 19 14 L 17.5 12 L 19 10 L 17.5 10 L 16.75 11 L 16 10 L 14.5 10 L 16 12 L 14.5 14 L 16 14 Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconNoAdultContent;
