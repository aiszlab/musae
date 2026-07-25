import React from "react";
import { withIcon } from "../../hoc";

const CameraOutdoor = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M 18.667 13.111 C 18.667 12.5 18.167 12 17.556 12 L 13.111 12 C 12.5 12 12 12.5 12 13.111 L 12 17.556 C 12 18.167 12.5 18.667 13.111 18.667 L 17.556 18.667 C 18.167 18.667 18.667 18.167 18.667 17.556 L 18.667 16.444 L 20.889 17.622 L 20.889 13.044 L 18.667 14.222 L 18.667 13.111 Z M 12 2 L 3.111 8.667 L 3.111 22 L 20.889 22 L 20.889 19.778 L 5.333 19.778 L 5.333 9.778 L 12 4.778 L 18.667 9.778 L 18.667 10.889 L 20.889 10.889 L 20.889 8.667 L 12 2 Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default CameraOutdoor;
