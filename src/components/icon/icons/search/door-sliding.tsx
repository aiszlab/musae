import React from "react";
import { withIcon } from "../../hoc";

const DoorSliding = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M 9.778 13.111 L 7.556 13.111 L 7.556 10.889 L 9.778 10.889 L 9.778 13.111 Z M 16.444 10.889 L 14.222 10.889 L 14.222 13.111 L 16.444 13.111 L 16.444 10.889 Z M 22 19.778 L 22 22 L 2 22 L 2 19.778 L 3.111 19.778 L 3.111 4.222 C 3.111 3 4.111 2 5.333 2 L 18.667 2 C 19.889 2 20.889 3 20.889 4.222 L 20.889 19.778 L 22 19.778 Z M 10.889 4.222 L 5.333 4.222 L 5.333 19.778 L 10.889 19.778 L 10.889 4.222 Z M 18.667 4.222 L 13.111 4.222 L 13.111 19.778 L 18.667 19.778 L 18.667 4.222 Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default DoorSliding;
