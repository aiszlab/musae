import React from "react";
import { withIcon } from "../../hoc";

const IconVibration = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M 2 14.5 L 3.667 14.5 L 3.667 9.5 L 2 9.5 L 2 14.5 Z M 4.5 16.167 L 6.167 16.167 L 6.167 7.833 L 4.5 7.833 L 4.5 16.167 Z M 20.333 9.5 L 20.333 14.5 L 22 14.5 L 22 9.5 L 20.333 9.5 Z M 17.833 16.167 L 19.5 16.167 L 19.5 7.833 L 17.833 7.833 L 17.833 16.167 Z M 15.75 4.5 L 8.25 4.5 C 7.558 4.5 7 5.058 7 5.75 L 7 18.25 C 7 18.942 7.558 19.5 8.25 19.5 L 15.75 19.5 C 16.442 19.5 17 18.942 17 18.25 L 17 5.75 C 17 5.058 16.442 4.5 15.75 4.5 Z M 15.333 17.833 L 8.667 17.833 L 8.667 6.167 L 15.333 6.167 L 15.333 17.833 Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconVibration;
