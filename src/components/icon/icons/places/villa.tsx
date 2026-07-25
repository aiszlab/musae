import React from "react";
import { withIcon } from "../../hoc";

const Villa = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M 19.778 9.778 C 18.556 9.778 17.556 10.778 17.556 12 L 16.444 12 L 16.444 2 L 2 7.556 L 2 22 L 22 22 L 22 12 C 22 10.778 21 9.778 19.778 9.778 Z M 4.222 9.078 L 14.222 5.233 L 14.222 12 L 8.667 12 L 8.667 19.778 L 4.222 19.778 L 4.222 9.078 Z M 19.778 19.778 L 16.444 19.778 L 16.444 16.444 L 14.222 16.444 L 14.222 19.778 L 10.889 19.778 L 10.889 14.222 L 19.778 14.222 L 19.778 19.778 Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default Villa;
