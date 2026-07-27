import React from "react";
import { withIcon } from "../../hoc";

const IconConnectWithoutContact = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M 11 14 L 9 14 C 9 9.03 13.03 5 18 5 L 18 7 C 14.13 7 11 10.13 11 14 Z M 18 11 L 18 9 C 15.24 9 13 11.24 13 14 L 15 14 C 15 12.34 16.34 11 18 11 Z M 7 4 C 7 2.89 6.11 2 5 2 C 3.89 2 3 2.89 3 4 C 3 5.11 3.89 6 5 6 C 6.11 6 7 5.11 7 4 Z M 11.45 4.5 L 9.45 4.5 C 9.21 5.92 7.99 7 6.5 7 L 3.5 7 C 2.67 7 2 7.67 2 8.5 L 2 11 L 8 11 L 8 8.74 C 9.86 8.15 11.25 6.51 11.45 4.5 Z M 19 17 C 20.11 17 21 16.11 21 15 C 21 13.89 20.11 13 19 13 C 17.89 13 17 13.89 17 15 C 17 16.11 17.89 17 19 17 Z M 20.5 18 L 17.5 18 C 16.01 18 14.79 16.92 14.55 15.5 L 12.55 15.5 C 12.75 17.51 14.14 19.15 16 19.74 L 16 22 L 22 22 L 22 19.5 C 22 18.67 21.33 18 20.5 18 Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconConnectWithoutContact;
