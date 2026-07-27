import React from "react";
import { withIcon } from "../../hoc";

const IconBungalow = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M 13.111 14.222 L 10.889 14.222 L 10.889 12 L 13.111 12 L 13.111 14.222 Z M 18.778 17.067 L 17.556 15.1 L 17.556 22 L 6.444 22 L 6.444 15.111 L 5.222 17.067 L 3.333 15.889 L 12 2 L 20.667 15.889 L 18.778 17.067 Z M 15.333 11.544 L 12 6.211 L 8.667 11.544 L 8.667 19.778 L 10.889 19.778 L 10.889 16.444 L 13.111 16.444 L 13.111 19.778 L 15.333 19.778 L 15.333 11.544 Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconBungalow;
