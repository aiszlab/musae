import React from "react";
import { withIcon } from "../../hoc";

const IconScoreboard = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M 18 10 L 15.5 10 C 14.95 10 14.5 10.45 14.5 11 L 14.5 15 C 14.5 15.55 14.95 16 15.5 16 L 18 16 C 18.55 16 19 15.55 19 15 L 19 11 C 19 10.45 18.55 10 18 10 Z M 17.5 14.5 L 16 14.5 L 16 11.5 L 17.5 11.5 L 17.5 14.5 Z M 9.5 16 L 5 16 L 5 13.5 C 5 12.95 5.45 12.5 6 12.5 L 8 12.5 L 8 11.5 L 5 11.5 L 5 10 L 8.5 10 C 9.05 10 9.5 10.45 9.5 11 L 9.5 12.5 C 9.5 13.05 9.05 13.5 8.5 13.5 L 6.5 13.5 L 6.5 14.5 L 9.5 14.5 L 9.5 16 Z M 12.75 12 L 11.25 12 L 11.25 10.5 L 12.75 10.5 L 12.75 12 Z M 12.75 15.5 L 11.25 15.5 L 11.25 14 L 12.75 14 L 12.75 15.5 Z M 22 7 L 22 19 C 22 20.1 21.1 21 20 21 L 4 21 C 2.9 21 2 20.1 2 19 L 2 7 C 2 5.9 2.9 5 4 5 L 7 5 L 7 3 L 9 3 L 9 5 L 15 5 L 15 3 L 17 3 L 17 5 L 20 5 C 21.1 5 22 5.9 22 7 Z M 20 19 L 20 7 L 12.75 7 L 12.75 8.5 L 11.25 8.5 L 11.25 7 L 4 7 L 4 19 L 11.25 19 L 11.25 17.5 L 12.75 17.5 L 12.75 19 L 20 19 Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconScoreboard;
