import React from "react";
import { withIcon } from "../../hoc";

const IconSportsBaseball = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M 12 2 C 6.48 2 2 6.48 2 12 C 2 17.52 6.48 22 12 22 C 17.52 22 22 17.52 22 12 C 22 6.48 17.52 2 12 2 Z M 5.61 16.78 C 4.6 15.45 4 13.8 4 12 C 4 10.2 4.6 8.55 5.61 7.22 C 7.06 8.31 8 10.05 8 12 C 8 13.95 7.06 15.69 5.61 16.78 Z M 12 20 C 10.11 20 8.37 19.34 7 18.24 C 8.83 16.77 10 14.53 10 12 C 10 9.47 8.83 7.23 7 5.76 C 8.37 4.66 10.11 4 12 4 C 13.89 4 15.63 4.66 17 5.76 C 15.17 7.23 14 9.47 14 12 C 14 14.53 15.17 16.77 17 18.24 C 15.63 19.34 13.89 20 12 20 Z M 18.39 16.78 C 16.94 15.69 16 13.95 16 12 C 16 10.05 16.94 8.31 18.39 7.22 C 19.4 8.55 20 10.2 20 12 C 20 13.8 19.4 15.45 18.39 16.78 Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconSportsBaseball;
