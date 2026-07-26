import React from "react";
import { withIcon } from "../../hoc";

const IconSwitchAccount = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M 4 6 L 2 6 L 2 20 C 2 21.1 2.9 22 4 22 L 18 22 L 18 20 L 4 20 L 4 6 Z M 14 11 C 15.66 11 17 9.66 17 8 C 17 6.34 15.66 5 14 5 C 12.34 5 11 6.34 11 8 C 11 9.66 12.34 11 14 11 Z M 14 7 C 14.55 7 15 7.45 15 8 C 15 8.55 14.55 9 14 9 C 13.45 9 13 8.55 13 8 C 13 7.45 13.45 7 14 7 Z M 20 2 L 8 2 C 6.9 2 6 2.9 6 4 L 6 16 C 6 17.1 6.9 18 8 18 L 20 18 C 21.1 18 22 17.1 22 16 L 22 4 C 22 2.9 21.1 2 20 2 Z M 10.69 16 C 11.64 15.37 12.78 15 14 15 C 15.22 15 16.36 15.37 17.31 16 L 10.69 16 Z M 20 15.73 C 18.53 14.06 16.4 13 14 13 C 11.6 13 9.47 14.06 8 15.73 L 8 4 L 20 4 L 20 15.73 Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconSwitchAccount;
