import React from "react";
import { withIcon } from "../../hoc";

const MilitaryTech = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M 17 10.43 L 17 2 L 7 2 L 7 10.43 C 7 10.78 7.18 11.11 7.49 11.29 L 11.67 13.8 L 10.68 16.14 L 7.27 16.43 L 9.86 18.67 L 9.07 22 L 12 20.23 L 14.93 22 L 14.15 18.67 L 16.74 16.43 L 13.33 16.14 L 12.34 13.8 L 16.52 11.29 C 16.82 11.11 17 10.79 17 10.43 Z M 11 11.07 L 9 9.87 L 9 4 L 11 4 L 11 11.07 Z M 15 9.87 L 13 11.07 L 13 4 L 15 4 L 15 9.87 Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default MilitaryTech;
