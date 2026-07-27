import React from "react";
import { withIcon } from "../../hoc";

const IconQueueMusic = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M21.5 5H16.5V13.18C16.19 13.07 15.85 13 15.5 13C13.84 13 12.5 14.34 12.5 16C12.5 17.66 13.84 19 15.5 19C17.16 19 18.5 17.66 18.5 16V7H21.5V5ZM14.5 5H2.5V7H14.5V5ZM14.5 9H2.5V11H14.5V9ZM10.5 13H2.5V15H10.5V13Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconQueueMusic;
