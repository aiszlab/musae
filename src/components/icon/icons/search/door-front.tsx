import React from "react";
import { withIcon } from "../../hoc";

const DoorFront = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M 19.778 19.778 L 19.778 4.222 C 19.778 3 18.778 2 17.556 2 L 6.444 2 C 5.222 2 4.222 3 4.222 4.222 L 4.222 19.778 L 2 19.778 L 2 22 L 22 22 L 22 19.778 L 19.778 19.778 Z M 17.556 19.778 L 6.444 19.778 L 6.444 4.222 L 17.556 4.222 L 17.556 19.778 Z M 13.111 10.889 L 15.333 10.889 L 15.333 13.111 L 13.111 13.111 L 13.111 10.889 Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default DoorFront;
