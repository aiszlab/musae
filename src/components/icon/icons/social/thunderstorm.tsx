import React from "react";
import { withIcon } from "../../hoc";

const IconThunderstorm = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M17.92 6.02C17.45 3.18 14.97 1 12 1C9.82 1 7.83 2.18 6.78 4.06C4.09 4.41 2 6.74 2 9.5C2 12.53 4.47 15 7.5 15H17.5C19.98 15 22 12.98 22 10.5C22 8.16 20.21 6.23 17.92 6.02ZM17.5 13H7.5C5.57 13 4 11.43 4 9.5C4 7.76 5.31 6.27 7.04 6.04L8.03 5.91L8.52 5.04C9.23 3.78 10.56 3 12 3C13.94 3 15.63 4.44 15.95 6.35L16.2 7.87L17.74 8.01C19.01 8.13 20 9.22 20 10.5C20 11.88 18.88 13 17.5 13Z"
        fill="currentColor"
      />
      <path
        d="M14.8 16L11.9 19.32L13.9 20.32L11.55 23H14.2L17.1 19.68L15.1 18.68L17.45 16H14.8Z"
        fill="currentColor"
      />
      <path
        d="M8.8 16L5.9 19.32L7.9 20.32L5.55 23H8.2L11.1 19.68L9.1 18.68L11.45 16H8.8Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconThunderstorm;
