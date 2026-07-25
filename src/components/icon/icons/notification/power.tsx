import React from "react";
import { withIcon } from "../../hoc";

const Power = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M 16.444 8.667 L 16.444 13.844 L 12.556 17.744 L 12.556 19.778 L 11.444 19.778 L 11.444 17.744 L 7.556 13.833 L 7.556 8.667 L 16.444 8.667 Z M 16.444 2 L 14.222 2 L 14.222 6.444 L 9.778 6.444 L 9.778 2 L 7.556 2 L 7.556 6.444 L 7.544 6.444 C 6.333 6.433 5.333 7.433 5.333 8.644 L 5.333 14.778 L 9.222 18.667 L 9.222 22 L 14.778 22 L 14.778 18.667 L 18.667 14.767 L 18.667 8.667 C 18.667 7.444 17.667 6.444 16.444 6.444 L 16.444 2 Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default Power;
