import React from "react";
import { withIcon } from "../../hoc";

const SpeakerGroup = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(3.2727, 0) scale(1.0909)">
        <path
          d="M14.2 0H5.8C4.81 0 4 0.81 4 1.8V16.2C4 17.19 4.81 17.99 5.8 17.99L14.2 18C15.19 18 16 17.19 16 16.2V1.8C16 0.81 15.19 0 14.2 0ZM14 16L6 15.99V2H14V16ZM10 7C11.1 7 12 6.11 12 5C12 3.89 11.1 3 10 3C8.9 3 8 3.89 8 5C8 6.11 8.9 7 10 7ZM10 15C11.93 15 13.5 13.43 13.5 11.5C13.5 9.57 11.93 8 10 8C8.07 8 6.5 9.57 6.5 11.5C6.5 13.43 8.07 15 10 15ZM10 10C10.83 10 11.5 10.67 11.5 11.5C11.5 12.33 10.83 13 10 13C9.17 13 8.5 12.33 8.5 11.5C8.5 10.67 9.17 10 10 10ZM2 4H0V20C0 21.1 0.89 22 2 22H12V20H2V4Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default SpeakerGroup;
