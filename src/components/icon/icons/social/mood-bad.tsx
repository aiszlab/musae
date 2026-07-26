import React from "react";
import { withIcon } from "../../hoc";

const IconMoodBad = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M 11.99 2 C 6.47 2 2 6.48 2 12 C 2 17.52 6.47 22 11.99 22 C 17.52 22 22 17.52 22 12 C 22 6.48 17.52 2 11.99 2 Z M 12 20 C 7.58 20 4 16.42 4 12 C 4 7.58 7.58 4 12 4 C 16.42 4 20 7.58 20 12 C 20 16.42 16.42 20 12 20 Z M 15.5 11 C 16.33 11 17 10.33 17 9.5 C 17 8.67 16.33 8 15.5 8 C 14.67 8 14 8.67 14 9.5 C 14 10.33 14.67 11 15.5 11 Z M 8.5 11 C 9.33 11 10 10.33 10 9.5 C 10 8.67 9.33 8 8.5 8 C 7.67 8 7 8.67 7 9.5 C 7 10.33 7.67 11 8.5 11 Z M 12 13.5 C 9.67 13.5 7.69 14.96 6.89 17 L 17.11 17 C 16.31 14.96 14.33 13.5 12 13.5 Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconMoodBad;
