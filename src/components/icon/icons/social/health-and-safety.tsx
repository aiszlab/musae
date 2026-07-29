import React from "react";
import { withIcon } from "../../hoc";

const IconHealthAndSafety = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M10.5 13H8V10H10.5V7.5H13.5V10H16V13H13.5V15.5H10.5V13ZM12 2L4 5V11.09C4 16.14 7.41 20.85 12 22C16.59 20.85 20 16.14 20 11.09V5L12 2ZM18 11.09C18 15.09 15.45 18.79 12 19.92C8.55 18.79 6 15.1 6 11.09V6.39L12 4.14L18 6.39V11.09Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconHealthAndSafety;
