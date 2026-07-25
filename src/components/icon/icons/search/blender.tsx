import React from "react";
import { withIcon } from "../../hoc";

const Blender = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M 17.63 15.13 L 19.5 3 L 15.5 3 L 15.5 2 L 11.5 2 L 11.5 3 L 6.5 3 C 5.4 3 4.5 3.9 4.5 5 L 4.5 9 C 4.5 10.1 5.4 11 6.5 11 L 8.73 11 L 9.37 15.13 C 8.24 16.05 7.5 17.43 7.5 19 L 7.5 20 C 7.5 21.1 8.4 22 9.5 22 L 17.5 22 C 18.6 22 19.5 21.1 19.5 20 L 19.5 19 C 19.5 17.43 18.76 16.05 17.63 15.13 Z M 6.5 9 L 6.5 5 L 7.81 5 L 8.43 9 L 6.5 9 Z M 17.17 5 L 15.79 14 L 11.22 14 L 9.83 5 L 17.17 5 Z M 17.5 20 L 9.5 20 L 9.5 19 C 9.5 17.35 10.85 16 12.5 16 L 14.5 16 C 16.15 16 17.5 17.35 17.5 19 L 17.5 20 Z"
        fill="currentColor"
      />
      <path
        d="M 13.5 19 C 14.05 19 14.5 18.55 14.5 18 C 14.5 17.45 14.05 17 13.5 17 C 12.95 17 12.5 17.45 12.5 18 C 12.5 18.55 12.95 19 13.5 19 Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default Blender;
