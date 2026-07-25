import React from "react";
import { withIcon } from "../../hoc";

const Handyman = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0.5942, 0) scale(1.1427)">
        <path
          d="M19.67 17.17L14.37 11.87H13.38L10.84 14.41V15.4L16.14 20.7C16.53 21.09 17.16 21.09 17.55 20.7L19.67 18.58C20.06 18.2 20.06 17.56 19.67 17.17ZM16.84 18.59L12.6 14.35L13.31 13.64L17.55 17.88L16.84 18.59Z"
          fill="currentColor"
        />
        <path
          d="M15.34 9.19L16.75 7.78L18.87 9.9C20.04 8.73 20.04 6.83 18.87 5.66L15.33 2.12L13.92 3.53V0.71L13.22 0L9.68 3.54L10.39 4.25H13.22L11.81 5.66L12.87 6.72L9.98 9.61L5.85 5.48V4.06L2.83 1.04L0 3.87L3.03 6.9H4.44L8.57 11.03L7.72 11.88H5.6L0.3 17.18C-0.09 17.57 -0.09 18.2 0.3 18.59L2.42 20.71C2.81 21.1 3.44 21.1 3.83 20.71L9.13 15.41V13.29L14.28 8.14L15.34 9.19ZM7.36 14.34L3.12 18.58L2.41 17.87L6.65 13.63L7.36 14.34Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default Handyman;
