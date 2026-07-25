import React from "react";
import { withIcon } from "../../hoc";

const DoNotDisturbAlt = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M 12 2 C 6.5 2 2 6.5 2 12 C 2 17.5 6.5 22 12 22 C 17.5 22 22 17.5 22 12 C 22 6.5 17.5 2 12 2 Z M 4 12 C 4 7.6 7.6 4 12 4 C 13.8 4 15.5 4.6 16.9 5.7 L 5.7 16.9 C 4.6 15.5 4 13.8 4 12 Z M 12 20 C 10.2 20 8.5 19.4 7.1 18.3 L 18.3 7.1 C 19.4 8.5 20 10.2 20 12 C 20 16.4 16.4 20 12 20 Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default DoNotDisturbAlt;
