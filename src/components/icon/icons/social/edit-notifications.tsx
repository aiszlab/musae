import React from "react";
import { withIcon } from "../../hoc";

const IconEditNotifications = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M 17.08 6.25 L 18.85 8.02 L 13.87 13 L 12.1 13 L 12.1 11.23 L 17.08 6.25 Z M 20.35 5.81 L 19.29 4.75 C 19.09 4.55 18.78 4.55 18.58 4.75 L 17.73 5.6 L 19.5 7.37 L 20.35 6.52 C 20.55 6.32 20.55 6 20.35 5.81 Z M 17.5 12.2 L 17.5 17 L 19.5 17 L 19.5 19 L 3.5 19 L 3.5 17 L 5.5 17 L 5.5 10 C 5.5 7.21 7.41 4.86 10 4.2 L 10 3.5 C 10 2.67 10.67 2 11.5 2 C 12.33 2 13 2.67 13 3.5 L 13 4.2 C 13.82 4.41 14.57 4.79 15.21 5.29 L 13.78 6.72 C 13.14 6.26 12.35 6 11.5 6 C 9.29 6 7.5 7.79 7.5 10 L 7.5 17 L 15.5 17 L 15.5 14.2 L 17.5 12.2 Z M 9.5 20 L 13.5 20 C 13.5 21.1 12.6 22 11.5 22 C 10.4 22 9.5 21.1 9.5 20 Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconEditNotifications;
