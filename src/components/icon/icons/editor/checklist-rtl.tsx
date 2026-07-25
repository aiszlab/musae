import React from "react";
import { withIcon } from "../../hoc";

const ChecklistRtl = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 2.958) scale(1.2)">
        <path
          d="M9 3.07H0V5.07H9V3.07ZM9 11.07H0V13.07H9V11.07ZM14.34 7.07L10.8 3.53L12.21 2.12L14.33 4.24L18.57 0L20 1.41L14.34 7.07ZM14.34 15.07L10.8 11.53L12.21 10.12L14.33 12.24L18.57 8L20 9.41L14.34 15.07Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default ChecklistRtl;
