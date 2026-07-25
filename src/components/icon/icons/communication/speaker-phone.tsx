import React from "react";
import { withIcon } from "../../hoc";

const SpeakerPhone = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(3.1386, 0) scale(1.1434)">
        <path
          d="M2.75 6.07L4.18 7.5C5.09 6.59 6.36 6.02 7.75 6.02C9.14 6.02 10.41 6.59 11.32 7.5L12.75 6.07C11.47 4.79 9.7 4 7.75 4C5.8 4 4.03 4.79 2.75 6.07ZM7.75 0C4.73 0 1.99 1.23 0 3.21L1.41 4.62C3.03 3 5.28 2 7.75 2C10.22 2 12.47 3 14.09 4.62L15.5 3.21C13.51 1.23 10.77 0 7.75 0ZM10.61 9.01L4.89 9C4.26 9 3.75 9.51 3.75 10.14V19.85C3.75 20.48 4.26 20.99 4.89 20.99H10.6C11.23 20.99 11.74 20.48 11.74 19.85V10.14C11.75 9.51 11.24 9.01 10.61 9.01ZM10.75 19H4.75V11H10.75V19Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default SpeakerPhone;
