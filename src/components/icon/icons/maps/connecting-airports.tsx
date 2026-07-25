import React from "react";
import { withIcon } from "../../hoc";

const ConnectingAirports = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(1.7872, 0) scale(1.2766)">
        <path
          d="M11.4 14.4L12.7 18.8H11.6L9 14.4H6C5.45 14.4 5 13.95 5 13.4C5 12.85 5.45 12.4 6 12.4H9L11.6 8H12.7L11.4 12.4H14.25L15 11.4H16L15.4 13.4L16 15.4H15L14.25 14.4H11.4ZM1.75 4.4L1 3.4H0L0.6 5.4L0 7.4H1L1.75 6.4H4.6L3.3 10.8H4.4L7 6.4H10C10.55 6.4 11 5.95 11 5.4C11 4.85 10.55 4.4 10 4.4H7L4.4 0H3.3L4.6 4.4H1.75Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default ConnectingAirports;
