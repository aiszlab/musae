import React from "react";
import { withIcon } from "../../hoc";

const PhotoFilter = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 0) scale(1.3333)">
        <path
          d="M16 7V16H1.98V2H10.98V0H2C0.9 0 0 0.9 0 2V16C0 17.1 0.9 18 2 18H16C17.1 18 18 17.1 18 16V7H16ZM13.06 4.94L14 7L14.94 4.94L17 4L14.94 3.06L14 1L13.06 3.06L11 4L13.06 4.94ZM9 5L7.75 7.75L5 9L7.75 10.25L9 13L10.25 10.25L13 9L10.25 7.75L9 5Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default PhotoFilter;
