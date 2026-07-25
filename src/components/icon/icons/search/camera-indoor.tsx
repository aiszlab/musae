import React from "react";
import { withIcon } from "../../hoc";

const CameraIndoor = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M 14.222 13.111 L 14.222 12 C 14.222 11.389 13.722 10.889 13.111 10.889 L 8.667 10.889 C 8.056 10.889 7.556 11.389 7.556 12 L 7.556 16.444 C 7.556 17.056 8.056 17.556 8.667 17.556 L 13.111 17.556 C 13.722 17.556 14.222 17.056 14.222 16.444 L 14.222 15.333 L 16.444 16.511 L 16.444 11.933 L 14.222 13.111 Z M 12 4.778 L 18.667 9.778 L 18.667 19.778 L 5.333 19.778 L 5.333 9.778 L 12 4.778 Z M 12 2 L 3.111 8.667 L 3.111 22 L 20.889 22 L 20.889 8.667 L 12 2 Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default CameraIndoor;
