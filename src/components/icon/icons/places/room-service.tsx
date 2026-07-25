import React from "react";
import { withIcon } from "../../hoc";

const RoomService = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M 2 17 L 2 19 L 22 19 L 22 17 L 2 17 Z M 21 16 C 20.73 11.93 17.75 8.6 13.84 7.79 C 13.94 7.55 14 7.28 14 7 C 14 5.9 13.1 5 12 5 C 10.9 5 10 5.9 10 7 C 10 7.28 10.06 7.55 10.16 7.79 C 6.25 8.6 3.27 11.93 3 16 L 21 16 Z M 12 9.58 C 14.95 9.58 17.47 11.41 18.5 13.99 L 5.5 13.99 C 6.53 11.41 9.05 9.58 12 9.58 Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default RoomService;
