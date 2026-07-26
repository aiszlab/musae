import React from "react";
import { withIcon } from "../../hoc";

const IconAddModerator = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M 5 11.09 L 5 6.39 L 11 4.14 L 17 6.39 L 17 10.08 C 17.71 10.18 18.38 10.39 19 10.68 L 19 5 L 11 2 L 3 5 L 3 11.09 C 3 16.14 6.41 20.85 11 22 C 11.03 21.99 11.05 21.98 11.08 21.98 C 10.29 21.2 9.68 20.22 9.33 19.14 C 6.76 17.53 5 14.42 5 11.09 Z"
        fill="currentColor"
      />
      <path
        d="M 16 12 C 13.24 12 11 14.24 11 17 C 11 19.76 13.24 22 16 22 C 18.76 22 21 19.76 21 17 C 21 14.24 18.76 12 16 12 Z M 19 17.5 L 16.5 17.5 L 16.5 20 L 15.5 20 L 15.5 17.5 L 13 17.5 L 13 16.5 L 15.5 16.5 L 15.5 14 L 16.5 14 L 16.5 16.5 L 19 16.5 L 19 17.5 Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconAddModerator;
