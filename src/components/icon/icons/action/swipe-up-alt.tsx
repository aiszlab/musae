import React from "react";
import { withIcon } from "../../hoc";

const SwipeUpAlt = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M13 6.83L14.59 8.42L16 7L12 3L8 7L9.41 8.41L11 6.83V11.1C8.72 11.56 7 13.58 7 16C7 18.76 9.24 21 12 21C14.76 21 17 18.76 17 16C17 13.58 15.28 11.56 13 11.1V6.83ZM12 19C10.34 19 9 17.66 9 16C9 14.34 10.34 13 12 13C13.66 13 15 14.34 15 16C15 17.66 13.66 19 12 19Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default SwipeUpAlt;
