import React from "react";
import { withIcon } from "../../hoc";

const IconAirlineSeatFlat = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M 5 12.5 C 5.78 12.5 6.55 12.2 7.14 11.6 C 8.3 10.41 8.28 8.52 7.1 7.36 C 6.51 6.79 5.75 6.5 5 6.5 C 4.22 6.5 3.45 6.8 2.86 7.4 C 1.7 8.59 1.72 10.48 2.9 11.64 C 3.49 12.21 4.25 12.5 5 12.5 Z M 4.29 8.8 C 4.48 8.61 4.73 8.5 5 8.5 C 5.26 8.5 5.51 8.6 5.7 8.78 C 6.1 9.17 6.1 9.79 5.72 10.19 C 5.52 10.39 5.27 10.5 5 10.5 C 4.74 10.5 4.49 10.4 4.3 10.22 C 3.9 9.82 3.9 9.2 4.29 8.8 Z M 18 6.5 L 9 6.5 L 9 12.5 L 22 12.5 L 22 10.5 C 22 8.29 20.21 6.5 18 6.5 Z M 11 10.5 L 11 8.5 L 18 8.5 C 19.1 8.5 20 9.4 20 10.5 L 11 10.5 Z M 2 15.5 L 8 15.5 L 8 17.5 L 16 17.5 L 16 15.5 L 22 15.5 L 22 13.5 L 2 13.5 L 2 15.5 Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconAirlineSeatFlat;
