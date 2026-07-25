import React from "react";
import { withIcon } from "../../hoc";

const NotificationAdd = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M 14 14 L 14 17 L 6 17 L 6 10 C 6 7.79 7.79 6 10 6 C 10.85 6 11.64 6.26 12.28 6.72 L 13.71 5.29 C 13.07 4.78 12.32 4.41 11.5 4.2 L 11.5 3.5 C 11.5 2.67 10.83 2 10 2 C 9.17 2 8.5 2.67 8.5 3.5 L 8.5 4.2 C 5.91 4.86 4 7.21 4 10 L 4 17 L 2 17 L 2 19 L 18 19 L 18 17 L 16 17 L 16 14 L 14 14 Z M 10 22 C 11.1 22 12 21.1 12 20 L 8 20 C 8 21.1 8.9 22 10 22 Z M 22 8 L 19 8 L 19 5 L 17 5 L 17 8 L 14 8 L 14 10 L 17 10 L 17 13 L 19 13 L 19 10 L 22 10 L 22 8 Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default NotificationAdd;
