import React from "react";
import { withIcon } from "../../hoc";

const IconHolidayVillage = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M 8 4 L 2 10 L 2 20 L 14 20 L 14 10 L 8 4 Z M 12 18 L 9 18 L 9 15 L 7 15 L 7 18 L 4 18 L 4 10.83 L 8 6.83 L 12 10.83 L 12 18 Z M 9 13 L 7 13 L 7 11 L 9 11 L 9 13 Z M 18 20 L 18 8.35 L 13.65 4 L 10.82 4 L 16 9.18 L 16 20 L 18 20 Z M 22 20 L 22 6.69 L 19.31 4 L 16.48 4 L 20 7.52 L 20 20 L 22 20 Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconHolidayVillage;
