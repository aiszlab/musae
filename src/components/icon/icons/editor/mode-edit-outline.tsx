import React from "react";
import { withIcon } from "../../hoc";

const ModeEditOutline = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 0) scale(1.3331)">
        <path
          d="M0 18.0025H3.75L14.81 6.9425L11.06 3.1925L0 14.2525V18.0025ZM2 15.0825L11.06 6.0225L11.98 6.9425L2.92 16.0025H2V15.0825Z"
          fill="currentColor"
        />
        <path
          d="M15.37 0.2925C14.98 -0.0975 14.35 -0.0975 13.96 0.2925L12.13 2.1225L15.88 5.8725L17.71 4.0425C18.1 3.6525 18.1 3.0225 17.71 2.6325L15.37 0.2925Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default ModeEditOutline;
