import React from "react";
import { withIcon } from "../../hoc";

const IconEventBusy = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M 19 4 L 18 4 L 18 2 L 16 2 L 16 4 L 8 4 L 8 2 L 6 2 L 6 4 L 5 4 C 3.9 4 3 4.9 3 6 L 3 20 C 3 21.1 3.9 22 5 22 L 19 22 C 20.1 22 21 21.1 21 20 L 21 6 C 21 4.9 20.1 4 19 4 Z M 19 20 L 5 20 L 5 10 L 19 10 L 19 20 Z M 5 8 L 5 6 L 19 6 L 19 8 L 5 8 Z M 8.23 17.41 L 9.29 18.47 L 11.73 16.03 L 14.17 18.47 L 15.23 17.41 L 12.79 14.97 L 15.23 12.53 L 14.17 11.47 L 11.73 13.91 L 9.29 11.47 L 8.23 12.53 L 10.67 14.97 L 8.23 17.41 Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconEventBusy;
